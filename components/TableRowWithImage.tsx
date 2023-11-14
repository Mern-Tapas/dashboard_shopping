import React from 'react'

function TableRowWithImage() {
    return (
        <tr className='border-b border-slate-300 dark:border-slate-600'>
            <td className='py-3 ps-3'>
                <div className="box h-[40px] w-[40px] border border-slate-300 dark:border-slate-400 bg-gray-200 dark:bg-gray-600 border rounded">
                </div>
            </td>
            <td className='py-3'>
                <h3 className='text-sm font-medium text-slate-900 dark:text-slate-200'>I Phone 15 Pro</h3>
                <p className='text-xs mt-1'>Product Name</p>
            </td>
            <td className='py-3'>
                <h3 className='text-sm'>$ 1200</h3>
                <p className='text-xs mt-1'>Price</p>
            </td>
            <td className='py-3'>
                <h3 className='bg-green-100 text-green-800 w-fit px-3 rounded font-medium py-[4px] text-xs  box-border dark:bg-green-800 dark:text-green-100 uppercase'>Complete</h3>
            </td>
            <td className='py-3 pe-3 text-right'>Head</td>
        </tr>
    )
}

export default TableRowWithImage