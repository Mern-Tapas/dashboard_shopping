import React from 'react'

function Div({ children, className }: { children: React.ReactNode, className: string }) {
    return (
        <div className={`${className} bg-white dark:bg-black`}>
            {children}
        </div>
    )
}

export default Div