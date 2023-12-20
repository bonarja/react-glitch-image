import React, { useEffect, useRef } from "react"

type CanvasInput = {
    image: HTMLImageElement
    height: number
    index: number
}
export const Canvas = ({image, height, index}: CanvasInput) => {
    const ref = useRef(null)
    useEffect(() => {
        if (ref.current) {
            const canvas = ref.current as HTMLCanvasElement
            const context = canvas.getContext('2d')
            context?.drawImage(image, 0, index * height, image.width, height,  0, 0, image.width, height);
        }
    }, [height, image, index, ref])
    return <canvas width={image.width} height={height} ref={ref}/>
}