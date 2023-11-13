'use client'
import Topbar from '@/components/dashboard/Topbar'
import Sidebar from '@/components/dashboard/Sidebar'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { createContext } from 'react'

export interface AdminContextValue {
    isOpen: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AdminContext = createContext<AdminContextValue>({
    isOpen: false,
    setOpen: (): void => { }

})


function Layout({ children }: { children: React.ReactNode }) {

    const [isOpen, setOpen] = useState<boolean>(false)


    return (
        <>
            <AdminContext.Provider value={{ isOpen, setOpen }}>

                <ChakraProvider>
                    <div className='flex h-screen overflow-hidden bg-gray-100 dark:bg-black'>
                        <Sidebar isOpen={isOpen} />
                        <div className="h-[100vh] w-full overflow-y-scroll">
                            {children}
                        </div>
                    </div>
                </ChakraProvider>
            </AdminContext.Provider>
        </>
    )
}

export default Layout