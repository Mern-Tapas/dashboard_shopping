import React, { useContext } from 'react'
import Div from './Div'
import { AdminContext, AdminContextValue } from '@/app/(admin)/layout'
import SidebarButton from './SidebarButton'
import MobileSidebarButton from './MobileSidebarButton'

function MobileSidebar({ className }: { className: string }) {

    const { isMobileSidebar,setMobileSidebar } = useContext<AdminContextValue>(AdminContext)

    return (
        <Div className={`${className} ${isMobileSidebar ? "" : "-left-[100%]"} block lg:hidden transition p-2 absolute z-30 shadow-[35px_0px_60px_-15px_rgba(0,0,0,0.1)] h-full w-[230px]`}>
            <MobileSidebarButton value={isMobileSidebar} buttonAction={setMobileSidebar} className='block lg:hidden' />

        </Div>
    )
}

export default MobileSidebar