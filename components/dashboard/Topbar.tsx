import React from 'react'
import SidebarButton from '../SidebarButton'
import Div from '@/components/Div'


function Topbar() {
    return (
        <Div className='z-20 component-Topbar h-[60px] w-full sticky top-0 border-b  '>
            <div className='max-w-screen-xl flex justify-between h-full px-2 mx-auto my-auto'>
                <div className='flex items-center'>
                    <SidebarButton />
                    <h1 className='ms-2 text-2xl font-bold capitalize dark:text-white'>Dashboard</h1>
                </div>
              
                <div className="flex items-center dark:text-white">
                   
                </div>
            </div>


        </Div>
    )
}

export default Topbar