import React from 'react'

function Div({ children, className }: { children: React.ReactNode, className: string }) {
    return (
        <div className={`${className} bg-white border-slate-300 dark:bg-black dark:border-slate-700 `}>
            {children}
        </div>
    )
}

export default Div