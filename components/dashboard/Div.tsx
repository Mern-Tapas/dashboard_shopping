import React from 'react'

function Div({ children, className }: { children: React.ReactNode, className: string }) {
    return (
        <div className={`${className} bg-white  dark:bg-black border-slate-200 dark:border-slate-800`}>
            {children}
        </div>
    )
}

export default Div