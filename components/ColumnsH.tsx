import React from 'react'
import Link from 'next/link'
import ColumnFooter from './ColumnPagination'
import ColumnHeader from './ColumnHeader'

export type ColumnsItem = {
    children: React.ReactNode,
    className: string,
    heading: string,
    subHeading: string,
}


function ColumnsH({ children, className, heading, subHeading }: ColumnsItem) {
    return (
        <div className={`${className} border dark:border-slate-600 rounded-lg dark:bg-gray-900 bg-white border-slate-300 h-[520px] overflow-hidden`}>
            <ColumnHeader subHeading={subHeading} heading={heading} />
            {children}
        </div>
    )
}

export default ColumnsH