import React, { useContext } from 'react'
import SidebarLinks from './SidebarLinks'
import Setting from '@/public/stock/icons/setting.svg'
import Logout from '@/public/stock/icons/logout-1.svg'
import Div from '@/components/Div'
import Help from '@/public/stock/icons/help.svg'
import { AdminContext, AdminContextValue } from '@/app/(admin)/layout'
import { usePathname } from 'next/navigation'



function Sidebar() {
    
    const pathname = usePathname()
    const { isOpen, setOpen, links } = useContext<AdminContextValue>(AdminContext)

    return (
        <Div className={`${isOpen ? "xl:w-[60px] lg:w-[198px]" : "xl:w-[198px]"}  border-r  w-[60px] transition-all hidden lg:flex flex-col  shrink-0 h-full`}>
            <div className={`p-2`}>
                <div className='flex border-b border-slate-300 dark:border-slate-700 logo-box h-[140px] '>
                    <div className={`m-auto bg-black dark:bg-white ${isOpen ? "w-[70px] h-[70px] xl:w-[36px] xl:h-[36px]" : "w-[36px] h-[36px] xl:w-[70px] xl:h-[70px]"} rounded-full`}>
                    </div>
                </div>
                {/* <div className='w-full border-b border-slate-300 dark:border-slate-600'></div> */}
            </div>
            <div className={`mt-5 ${isOpen ? "px-2" : "px-2"}`}>
                {links.map((link, index) => {
                    return <SidebarLinks key={index} isOpen={isOpen} linkName={link.linkName} path={link.path} className={` ${(pathname == link.path) ? "bg-blue-600 hover:bg-blue-700 text-white" : "dark:hover:bg-slate-800 hover:bg-slate-50 dark:text-slate-300"} flex items-center p-2 py-1 rounded mb-1`} Icon={link.Icon} />

                })}
            </div>
            <div className={`${isOpen ? "px-2" : "px-2"} mt-auto`}>
                <SidebarLinks iconClass='text-white' isOpen={isOpen} linkName='Logout' path='/admin' className='flex items-center p-2 py-1 bg-red-600 text-white rounded mb-1' Icon={Logout} />
            </div>
        </Div>

    )
}

export default Sidebar