import React from 'react'
import LeftArrow from '@/public/stock/icons/arrow-left.svg'
import RightArrow from '@/public/stock/icons/arrow-right-1.svg'

export type Props = {
    className: string,
}

function ColumnPagination({ className }: Props) {
    return (
        <div className={`${className} h-[80px] bg-gray-50 flex justify-between text-slate-600 dark:text-slate-300 dark:bg-gray-900 bg-white`}>
            <div className='my-auto'>
                <p className='text-sm text-slate-500'>Showing <span className='text-slate-900 dark:dark:text-slate-300'>5</span> of <span className='text-slate-900 dark:dark:text-slate-300'>25</span> Results</p>
            </div>
            <div className='my-auto'>
                <div className='flex justify-between w-[230px]'>
                    <button className='text-xs rounded border border-slate-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-slate-600 inline w-[60px] h-[30px] flex'><LeftArrow className=" m-auto" /></button>
                    <button className='text-xs rounded border border-slate-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-slate-600 inline w-[30px] h-[30px]'>1</button>
                    <button className='text-xs rounded border border-slate-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-slate-600 inline w-[30px] h-[30px]'>2</button>
                    <button className='text-xs rounded border border-slate-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-slate-600 inline w-[30px] h-[30px]'>3</button>
                    <button className='text-xs rounded border border-slate-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-slate-600 inline w-[60px] h-[30px] flex'><RightArrow className=" m-auto" /></button>
                </div>
            </div>
        </div>
    )
}

export default ColumnPagination