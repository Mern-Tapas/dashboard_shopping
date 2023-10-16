'use client'
import React, { useState } from 'react'


function layout({ children }: { children: React.ReactNode }) {

    const [settings, setSettings] = useState({
        mode: "dark"
    })

    return (
        <>
            <div className='bg-gray-100 flex h-screen overflow-hidden '>
                <div className='w-[198px]  bg-white shrink-0 border-r dark:bg-gray-800 h-full'>

                </div>
                <div className="h-[100vh] w-full overflow-hidden">
                    <div className='h-[60px] bg-white border-b'>

                    </div>
                    <div className='max-w-screen-xl mx-auto h-[calc(100%-60px)] px-2'>

                        <div className='grid gap-4 xl:grid-cols-4 grid-cols-2 my-3 grid-rows-[130px_130px] xl:grid-rows-[130px]'>

                            <div className='bg-white flex flex-col border shadow-sm rounded-lg p-6'>
                                <div className='my-auto'>
                                    <h1 className='text-4xl font-bold'>$ 256</h1>
                                    <h1 className='mt-2 text-gray-500'>Total Sales</h1>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default layout