'use client'
import React from 'react'
import Topbar from '@/components/dashboard/Topbar'

function Layout({ children }: { children: React.ReactNode }) {


    return (
        <>
            <Topbar />
            <div className='max-w-screen-xl contanier mx-auto px-2'>
                {children}
            </div>
        </>
    )
}

export default Layout