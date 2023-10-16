'use client'
import Count from '@/components/Count'
import React, { useState } from 'react'


function layout({ children }: { children: React.ReactNode }) {

    const [settings, setSettings] = useState({
        mode: "dark"
    })

    return (
        <>
            <div className='bg-gray-100 flex h-screen overflow-hidden '>
                <div className='w-[198px] hidden xl:block bg-white shrink-0 border-r dark:bg-gray-800 h-full'>

                </div>
                <div className="h-[100vh] w-full overflow-y-scroll">
                    <div className='h-[60px] bg-white border-b'>

                    </div>
                    <div className='max-w-screen-lg mx-auto h-[calc(100%-60px)] px-2'>

                        <div className='grid gap-3 lg:grid-cols-4 grid-cols-2 my-3 '>

                            <Count />
                            <Count />
                            <Count />
                            <Count />

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default layout