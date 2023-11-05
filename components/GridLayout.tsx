import React from 'react'

export type GridSize = {
    sm: number,
    md: number,
    lg: number,
    xl: number,
    children: React.ReactNode,
    className: string
}

function GridLayout({ sm, md, lg, xl, children, className }: GridSize) {
    return (
        <div className={`grid gap-3 sm:grid-cols-${sm} md:grid-cols-${md} lg:grid-cols-${lg} xl:grid-cols-${xl} ${className}`}>

            {children}

        </div>
    )
}

export default GridLayout