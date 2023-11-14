import React from 'react'
import Link from 'next/link'
import ColumnFooter from './ColumnPagination'
import ColumnHeader from './ColumnHeader'
import Div from '@/layouts/Div'

export type ColumnsItem = {
    children: React.ReactNode,
    className: string,
    heading: string,
    subHeading: string,
}


function ColumnsH({ children, className, heading, subHeading }: ColumnsItem) {
    return (
        <Div className={`${className} border rounded-lg h-[520px] overflow-hidden`}>
            <ColumnHeader subHeading={subHeading} heading={heading} />
            {children}
        </Div>
    )
}

export default ColumnsH