'use client'
import Topbar from '@/components/Topbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'


function layout({ children }: { children: React.ReactNode }) {

    const [isOpen, setOpen] = useState<boolean>(false)


    return (
        <>
            <ChakraProvider>
                <div className='bg-gray-100 flex h-screen overflow-hidden '>
                    <Sidebar isOpen={isOpen} />
                    <div className="h-[100vh] w-full overflow-y-scroll">
                        <Topbar isOpen={isOpen} sidebarButton={setOpen} />
                        <div className='max-w-screen-lg 2xl:max-w-screen-xl contanier mx-auto px-4'>

                            {children}

                        </div>

                    </div>
                </div>
            </ChakraProvider>
        </>
    )
}

export default layout