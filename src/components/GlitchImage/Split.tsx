import React, { ReactElement, useCallback, useState } from "react"
import { useEffect } from "react";
import { Canvas } from "./Canvas";

export const useSplitImage = (src: string, splitSize: number) => {
    const [ pieces, setPieces ] = useState<ReactElement<typeof Canvas>[] | null>(null)

    const init = useCallback( () => {
        const imagePieces: ReactElement<typeof Canvas>[] = [];
        const image = new Image()

        image.onload = () => {
            const heightOfOnePiece = image.height / splitSize

            Array(splitSize).fill(0).forEach((item,index) => {
                imagePieces.push(<Canvas image={image} height={heightOfOnePiece} index={index}  />)
            })

            setPieces(imagePieces)
        }
        image.onerror = (err) => {
            console.error("GlitchImage Error: ", err)
        }
        image.src = src
    }, [src, splitSize])


    useEffect(() => {
        init()
    }, [src, splitSize, init])


    return { pieces }
}