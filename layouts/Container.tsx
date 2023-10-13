import React from 'react'

function Container({ children, className }: { children: React.ReactNode, className: string }) {
    return (
        <div className={`${className} p-2`}>
            {children}
        </div>
    )
}

export default Container