import React from 'react'

function Div({ children, className }: { children: React.ReactNode, className: string }) {
    return (
        <div className={`${className} bg-white rounded-md border-slate-200 dark:bg-black dark:border-slate-800 `}>
            {children}
        </div>
    )
}

export default Div