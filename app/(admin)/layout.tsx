import Topbar from '@/components/Topbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function layout({ children }: { children: React.ReactNode }) {


    return (
        <>
            <ChakraProvider>
                <div className='bg-gray-100 flex h-screen overflow-hidden '>
                    <Sidebar />
                    <div className="h-[100vh] w-full overflow-y-scroll">
                        <Topbar />
                        <div className='max-w-screen-xl contanier mx-auto px-4'>

                            {children}

                        </div>

                    </div>
                </div>
            </ChakraProvider>
        </>
    )
}

export default layout