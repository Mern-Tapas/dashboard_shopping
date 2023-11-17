'use client'
import React, { useContext } from 'react'
import MenuSvg from '@/public/stock/icons/menu-1.svg'
import { AdminContext, AdminContextValue } from '@/app/(admin)/layout'
import Close from '@/public/stock/icons/close.svg'


function SidebarButton() {
    const { isOpen, setOpen } = useContext<AdminContextValue>(AdminContext)
    return (
        <button className='hidden lg:block border p-1 rounded border-slate-200 dark:border-slate-800 ' onClick={() => { setOpen(!isOpen) }} >
            <div className='relative h-[26px] w-[26px]'>
                <MenuSvg className={`${isOpen ? "" : "opacity-0 rotate-90"} transition duration-200 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-700 dark:text-slate-300`} />
                <Close className={`${isOpen ? "opacity-0 rotate-90" : ""} transition duration-200 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-700 dark:text-slate-300`} />
            </div>
        </button>
    )
}

export default SidebarButton