import React from 'react'

function TableRowWithImage() {
    return (
        <tr className='border-b border-slate-300 dark:border-slate-600'>
            <td className='py-3 ps-3'>
                <div className="box h-[40px] w-[40px] border border-slate-300 dark:border-slate-400 bg-gray-200 dark:bg-gray-600 border rounded">
                </div>
            </td>
            <td className='py-3'>
                <h3 className='text-sm font-medium'>Helo</h3>
                <p className='text-xs'>sub details</p>
            </td>
            <td className='py-3'>
                <h3 className='text-sm'>Helo</h3>
                <p className='text-xs'>sub details</p>
            </td>
            <td className='py-3'>
                <h3 className='text-sm'>Helo</h3>
                <p className='text-xs'>sub details</p>
            </td>
            <td className='py-3 pe-3'>Head</td>
        </tr>
    )
}

export default TableRowWithImage