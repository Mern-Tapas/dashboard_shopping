import React from 'react'

export type GridSize = {
    sm: string,
    md: string,
    lg: string,
    xl: string,
    children: React.ReactNode,
    className: string
}

function GridLayout({ sm, md, lg, xl, children, className }: GridSize) {
    return (
        <div className={`grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 ${className}`}>

            {children}

        </div>
    )
}

export default GridLayout