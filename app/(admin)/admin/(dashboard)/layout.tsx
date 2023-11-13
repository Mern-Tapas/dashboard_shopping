'use client'
import React from 'react'
import Topbar from '@/components/dashboard/Topbar'

function Layout({ children }: { children: React.ReactNode }) {


    return (
        <>
            <Topbar />
            <div className='max-w-screen-lg 2xl:max-w-screen-xl contanier mx-auto px-4'>
                {children}
            </div>
        </>
    )
}

export default Layout