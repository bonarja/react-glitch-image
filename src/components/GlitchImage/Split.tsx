import React, { ReactElement, useRef, useState } from "react"
import { useEffect } from "react";


type CanvasInput = {
    image: HTMLImageElement
    height: number
    index: number
}
const Canvas = ({image, height, index}: CanvasInput) => {
    const ref = useRef(null)
    useEffect(() => {
        if (ref.current) {
            const canvas = ref.current as HTMLCanvasElement
            const context = canvas.getContext('2d')
            context?.drawImage(image, 0, index * height, image.width, height,  0, 0, image.width, height);
        }
    }, [ref])
    return <canvas width={image.width} height={height} ref={ref}/>
}


export const useSplitImage = (src: string, splitSize: number) => {
    const [ pieces, setPieces ] = useState<ReactElement<typeof Canvas>[] | null>(null)

    const init = () => {
        const imagePieces: ReactElement<typeof Canvas>[] = [];
        const image = new Image()

        image.onload = () => {
            const heightOfOnePiece = image.height / splitSize

            Array(splitSize).fill(0).forEach((item,index) => {
                imagePieces.push(<Canvas image={image} height={heightOfOnePiece} index={index}  />)
            })

            setPieces(imagePieces)
        }
        image.onerror = (err,b,c) => {
            console.error("GlitchImage Error: ", err, b,c)
        }
        image.src = src
    }


    useEffect(() => {
        !pieces && init()
    }, [])


    return { pieces }
}