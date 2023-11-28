import React from 'react'

export type GridSize = {
    children: React.ReactNode,
    className: string
}

function GridLayout({children, className }: GridSize) {
    return (
        <div className={`grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 ${className}`}>
            {children}
        </div>
    )
}

export default GridLayout