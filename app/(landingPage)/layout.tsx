import React from 'react'
import Image from 'next/image'
import Header from '@/components/dashboard/Header'
import { ChakraProvider } from '@chakra-ui/react'


function layout({ children }: { children: React.ReactNode }) {




    return (
        <>
            <ChakraProvider toastOptions={{ defaultOptions: { position: 'bottom' } }}>
                <div className='min-h-[100vh] flex flex-col bg-white'>

                    <Header />

                    {children}

                </div>
            </ChakraProvider>
        </>
    )
}

export default layout