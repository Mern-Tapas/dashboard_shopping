import React from 'react'
import Image from 'next/image'
import SidebarLinks from './SidebarLinks'
import Home from '@/public/stock/icons/home.svg'
import Setting from '@/public/stock/icons/setting.svg'
import Reports from '@/public/stock/icons/Report.svg'



interface Props {
    isOpen: boolean
}



function Sidebar({ isOpen }: Props) {
    return (
        <div className={`${isOpen ? "xl:w-[60px] lg:w-[198px]" : "xl:w-[198px]"} border-r border-slate-300  w-[60px] transition-all hidden lg:block  bg-white shrink-0  dark:bg-gray-900 h-full dark:border-slate-600 `}>
            <div className={`p-2`}>
                <div className='flex logo-box h-[140px] '>
                    <div className="m-auto w-[70px]">
                        <Image className='object-cover ' src={'/stock/images/brand/logo-blue.png'} alt='logo' height={400} width={400} />
                    </div>
                </div>
                {/* <div className='w-full border-b border-slate-300 dark:border-slate-600'></div> */}
            </div>
            <div className={`${isOpen ? "px-2" : "px-2"}`}>
                <SidebarLinks isOpen={isOpen} linkName='Dashboard' path='/admin' className='flex items-center p-2 py-1 dark:hover:bg-slate-800 hover:bg-slate-50 rounded mb-1 ' Icon={Home} />
                <SidebarLinks isOpen={isOpen} linkName='Reports' path='/admin' className='flex items-center p-2 py-1 dark:hover:bg-slate-800 hover:bg-slate-50 rounded mb-1' Icon={Setting} />
                <SidebarLinks isOpen={isOpen} linkName='Reports' path='/admin' className='flex items-center p-2 py-1 dark:hover:bg-slate-800 hover:bg-slate-50 rounded mb-1' Icon={Setting} />
                <SidebarLinks isOpen={isOpen} linkName='Reports' path='/admin' className='flex items-center p-2 py-1 dark:hover:bg-slate-800 hover:bg-slate-50 rounded mb-1' Icon={Reports} />
            </div>
        </div>
    )
}

export default Sidebar