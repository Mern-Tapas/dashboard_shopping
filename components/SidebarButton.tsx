'use client'
import React, { useContext } from 'react'
import MenuSvg from '@/public/stock/icons/menu-1.svg'
import { AdminContext, AdminContextValue } from '@/app/(admin)/layout'


function SidebarButton() {
    const { isOpen, setOpen } = useContext<AdminContextValue | any>(AdminContext)
    return (
        <button className='hidden lg:block border p-1 rounded border-slate-300 dark:border-slate-600 ' onClick={() => { setOpen(!isOpen) }} >
            <MenuSvg className="text-slate-400 dark:text-slate-300" />
        </button>
    )
}

export default SidebarButton