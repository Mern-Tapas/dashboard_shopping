'use client'
import React from 'react'
import { useContext } from 'react'
import { AdminContext, AdminContextValue } from '../../layout'
import AdminHeader from '@/components/AdminHeader'

function Layout({ children }: { children: React.ReactNode }) {
    const { isOpen, setOpen } = useContext<AdminContextValue>(AdminContext)

    return (
        <>
            <AdminHeader />
            <div className='max-w-screen-lg 2xl:max-w-screen-xl contanier mx-auto px-4'>
                {children}
            </div>
        </>
    )
}

export default Layout