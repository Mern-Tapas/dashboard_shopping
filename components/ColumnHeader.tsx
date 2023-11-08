import React from 'react'
import Link from 'next/link'

type Props = {
    heading: string
    subHeading: string
}

function ColumnHeader({ heading, subHeading }: Props) {
    return (
        <div className='p-3 flex justify-between bg-white dark:bg-gray-900 border-b border-slate-300 dark:border-slate-600'>
            <div>
                <h3 className='font-medium text-sm text-slate-900 dark:text-slate-200 dark:text-slate-300 capitalize'>{heading}</h3>
                <p className='mt-1 text-xs dark:text-slate-400 capitalize'>{subHeading}</p>
            </div>
            <div className='my-auto'>
                <Link href="/view" className='text-xs text-slate-600 dark:text-slate-300 border px-3 py-1 rounded dark:border-slate-600 my-auto'>See All</Link>
            </div>
        </div>
    )
}

export default ColumnHeader