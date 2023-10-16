import React from 'react'
import Box from '@/public/stock/icons/box.svg'


function Count() {
    return (
        <div className='bg-white flex  borde shadow-sm rounded-2xl p-4 md:p-6'>
            <div className='my-auto '>
                <h1 className='text-lg sm:text-2xl font-bold'>$ 256</h1>
                <h1 className='mt-1 text-[12px] sm:text-sm text-gray-500'>Total Sales</h1>
            </div>
            <div className='ms-auto flex bg-blue-600 rounded-lg md:h-[65px] md:w-[65px]  h-[40px] w-[40px] my-auto'>
                <Box className="m-auto md:h-10 md:w-10 w-6 h-6 text-white" />
            </div>
        </div>
    )
}

export default Count