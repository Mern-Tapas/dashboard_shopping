'use client'
import React from 'react'
import AdminHeader from '@/components/AdminHeader'

function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <AdminHeader />
            <div className='max-w-screen-xl contanier mx-auto px-4'>
                {children}
            </div>
        </>
    )
}

export default Layout