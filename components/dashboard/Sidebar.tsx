import React from 'react'
import SidebarLinks from './SidebarLinks'
import Home from '@/public/stock/icons/home.svg'
import Setting from '@/public/stock/icons/setting.svg'
import Reports from '@/public/stock/icons/Report.svg'
import Logout from '@/public/stock/icons/logout-1.svg'
import Box24 from '@/public/stock/icons/box24.svg'
import People from '@/public/stock/icons/people.svg'
import Profile from '@/public/stock/icons/profile.svg'
import Div from '@/layouts/Div'

interface Props {
    isOpen: boolean
}



function Sidebar({ isOpen }: Props) {
    return (
        <Div className={`${isOpen ? "xl:w-[60px] lg:w-[198px]" : "xl:w-[198px]"}  border-r  w-[60px] transition-all hidden lg:flex flex-col  shrink-0 h-full`}>
            <div className={`p-2`}>
                <div className='flex border-b border-slate-300 dark:border-slate-600 logo-box h-[140px] '>
                    <div className={`m-auto bg-black ${isOpen ? "w-[70px] h-[70px] xl:w-[36px] xl:h-[36px]" : "w-[36px] h-[36px] xl:w-[70px] xl:h-[70px]"} rounded-full`}>
                    </div>
                </div>
                {/* <div className='w-full border-b border-slate-300 dark:border-slate-600'></div> */}
            </div>
            <div className={`mt-5 ${isOpen ? "px-2" : "px-2"}`}>
                <SidebarLinks isOpen={isOpen} linkName='Dashboard' path='/admin' className='flex items-center p-2 py-1 dark:hover:bg-slate-800 hover:bg-slate-50 rounded mb-1 ' Icon={Home} />
                <SidebarLinks isOpen={isOpen} linkName='Reports' path='/admin' className='flex items-center p-2 py-1 dark:hover:bg-slate-800 hover:bg-slate-50 rounded mb-1' Icon={Reports} />
            </div>
            <div className={`mt-5 ${isOpen ? "px-2" : "px-2"}`}>
                <SidebarLinks isOpen={isOpen} linkName='Products' path='/admin/products' className='flex items-center p-2 py-1 dark:hover:bg-slate-800 hover:bg-slate-50 rounded mb-1' Icon={Box24} />
                <SidebarLinks isOpen={isOpen} linkName='Customers' path='/admin/products' className='flex items-center p-2 py-1 dark:hover:bg-slate-800 hover:bg-slate-50 rounded mb-1' Icon={People} />
                <SidebarLinks isOpen={isOpen} linkName='Venders' path='/admin/products' className='flex items-center p-2 py-1 dark:hover:bg-slate-800 hover:bg-slate-50 rounded mb-1' Icon={Profile} />
                <SidebarLinks isOpen={isOpen} linkName='Settings' path='/admin/settings' className='flex items-center p-2 py-1 dark:hover:bg-slate-800 hover:bg-slate-50 rounded mb-1' Icon={Setting} />
            </div>
            <div className={`${isOpen ? "px-2" : "px-2"} mt-auto`}>
                <SidebarLinks isOpen={isOpen} linkName='Settings' path='/admin/settings' className='flex items-center p-2 py-1 dark:hover:bg-slate-800 hover:bg-slate-50 rounded mb-1' Icon={Setting} />
                <SidebarLinks isOpen={isOpen} linkName='Help' path='/admin/Help' className='flex items-center p-2 py-1 dark:hover:bg-slate-800 hover:bg-slate-50 rounded mb-1' Icon={Setting} />
                <SidebarLinks iconClass='text-white' isOpen={isOpen} linkName='Logout' path='/admin' className='flex items-center p-2 py-1 bg-red-600 text-white rounded mb-1' Icon={Logout} />
            </div>
        </Div>

    )
}

export default Sidebar