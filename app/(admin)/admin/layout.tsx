'use client'
import React from 'react'
import Topbar from '@/components/dashboard/Topbar'
import { useContext } from 'react'
import { AdminContext, AdminContextValue } from '../layout'

function Layout({ children }: { children: React.ReactNode }) {

    const { isOpen, setOpen } = useContext<AdminContextValue | any>(AdminContext)

    return (
        <>
            <Topbar isOpen={isOpen} sidebarButton={setOpen} />
            <div className='max-w-screen-lg 2xl:max-w-screen-xl contanier mx-auto px-4 '>
                {children}
            </div>
        </>
    )
}

export default Layout