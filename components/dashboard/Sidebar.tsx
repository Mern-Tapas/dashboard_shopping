import React, { useContext } from 'react'
import Div from '@/components/dashboard/Div'
import { AdminContext, AdminContextValue } from '@/app/(admin)/layout'
import { usePathname } from 'next/navigation'



function Sidebar() {

    const pathname = usePathname()
    const { isOpen, setOpen, links } = useContext<AdminContextValue>(AdminContext)

    return (
        <Div className={`${isOpen ? "xl:w-[60px] lg:w-[198px]" : "xl:w-[198px]"} w-[60px] transition-all hidden lg:flex flex-col  shrink-0 h-full`}>

        </Div>

    )
}

export default Sidebar