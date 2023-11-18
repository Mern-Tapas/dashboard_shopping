import React from 'react'
import Link from 'next/link'
import Div from '@/components/dashboard/Div'

type Props = {
    heading: string
    subHeading: string
}

function ColumnHeader({ heading, subHeading }: Props) {
    return (
        <Div className='p-3 flex justify-between border-b'>
            <div>
                <h3 className='font-medium text-sm text-slate-900 dark:text-slate-200 dark:text-slate-300 capitalize'>{heading}</h3>
                <p className='mt-1 text-xs dark:text-slate-400 capitalize'>{subHeading}</p>
            </div>
            <div className='my-auto'>
                <Link href="/view" className='text-xs  px-3 py-1 rounded bg-blue-600 text-white my-auto'>See All</Link>
            </div>
        </Div>
    )
}

export default ColumnHeader