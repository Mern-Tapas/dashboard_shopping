'use client'
import React, { useState } from 'react'


function layout({ children }: { children: React.ReactNode }) {

    const [settings, setSettings] = useState({
        mode: "dark"
    })

    return (
        <>
            <div className='bg-white flex h-screen overflow-hidden bg-gray-200'>
                <div className='w-[170p] w-[65px] shrink-0 bg-gray-700 dark:bg-gray-800 h-full'>

                </div>
                <div className="h-[100vh] w-full overflow-hidden bg-gray-100 p-2">
                    <div className='h-[60px] bg-white'>

                    </div>
                    <div className='bg-black h-[calc(100%-60px)]'>

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default layout