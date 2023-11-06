import React from 'react'

export type Props = {
    className: string,
}

function ColumnPagination({ className }: Props) {
    return (
        <div className={`${className} p-3 bg-gray-50 flex justify-between`}>
            <div className='h-full'>
                <p className='text-sm text-slate-500'>Showing 5 of 25 Results</p>
            </div>
            <div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ColumnPagination