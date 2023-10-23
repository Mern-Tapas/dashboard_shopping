import React from 'react'
import Container from '@/layouts/Container'
import Image from 'next/image'
import Header from '@/components/Header'

function layout({ children }: { children: React.ReactNode }) {


   

    return (
        <>
            <div className='min-h-[100vh] flex flex-col'>

                <Header  />

                {children}

            </div>
        </>
    )
}

export default layout