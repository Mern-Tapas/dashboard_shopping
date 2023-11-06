import React from 'react'

export type Props = {
    className: string,
}

function ColumnPagination({ className }: Props) {
    return (
        <div className={`${className} border h-full flex justify-between`}>
            <div className='h-full border'>
                d
            </div>
        </div>
    )
}

export default ColumnPagination