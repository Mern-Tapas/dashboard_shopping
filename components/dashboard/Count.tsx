import React from 'react'
import Box from '@/public/stock/icons/box.svg'
import Div from '@/components/Div'


function Count() {
    return (
        <Div className='flex rounded-lg p-4 md:p-6 border'>
            <div className='my-auto '>
                <h1 className='text-lg sm:text-2xl font-bold dark:text-white'>$ 256</h1>
                <h1 className='mt-1 text-[12px] sm:text-sm text-gray-500 dark:text-gray-300'>Total Sales</h1>
            </div>
            <div className='ms-auto flex bg-blue-600 rounded-md md:h-[65px] md:w-[65px]  h-[45px] w-[45px] my-auto'>
                <Box className="m-auto md:h-10 md:w-10 w-6 h-6 text-white" />
            </div>
        </Div>
    )
}

export default Count