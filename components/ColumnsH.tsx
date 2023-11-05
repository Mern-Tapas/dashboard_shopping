import React from 'react'
import Link from 'next/link'

export type ColumnsItem = {
    children: React.ReactNode,
    className: string,
    heading: string,
    subHeading: string,
    scroll: boolean,
}

function ColumnsH({ children, className, heading, subHeading, scroll }: ColumnsItem) {
    return (
        <div className={`${className} border dark:border-slate-600 rounded-lg dark:bg-gray-900 bg-white border-slate-300  h-[450px] relative ${scroll ? "overflow-y-scroll" : "d"} `}>
            <div className='p-3 flex justify-between sticky top-0 bg-white dark:bg-gray-900 border-b border-slate-300 dark:border-slate-600'>
                <div>
                    <h3 className='font-medium text-sm text-slate-600 dark:text-slate-300 capitalize'>{heading}</h3>
                    <p className='mt-1 text-xs dark:text-slate-400'>{subHeading}</p>
                </div>
                <div className='my-auto'>
                    <Link href="/view" className='text-xs text-slate-600 dark:text-slate-300 border px-3 py-1 rounded dark:border-slate-600 my-auto'>View</Link>
                </div>
            </div>
            {children}
        </div>
    )
}

export default ColumnsH