import React from 'react'
import Image from 'next/image'

function ImageBox({ height, width, alt, src, className }: { height: number, width: number, alt: string, src: string, className: string }) {
    return (
        <Image className={className} alt={alt ? alt : "image-alt-not-define"} src={src} height={height} width={width} />
    )
}

export default ImageBox