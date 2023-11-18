'use client'
import React from 'react'
import AdminHeader from '@/components/dashboard/AdminHeader'

function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <AdminHeader />
            <div className='max-w-screen-xl contanier mx-auto px-2'>
                {children}
            </div>
        </>
    )
}

export default Layout