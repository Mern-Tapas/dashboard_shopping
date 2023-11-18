'use client'
import Sidebar from '@/components/dashboard/Sidebar'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { createContext } from 'react'
import links from '@/DemoData/links'
import { FC, SVGProps } from 'react'
import Settings from '@/public/stock/icons/setting.svg'
import MobileSidebar from '@/components/dashboard/MobileSidebar'



export interface Sublink {
    linkName: string,
    path: string
}

export interface Link {
    linkName: string,
    path: string,
    Icon: FC<SVGProps<SVGElement>>,
    subLinks: Sublink[]
}

export interface AdminContextValue {
    isOpen: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    links: Link[]
    isMobileSidebar: boolean,
    setMobileSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

export const AdminContext = createContext<AdminContextValue>({
    isOpen: false,
    setOpen: (): void => { },
    links: [{ linkName: "linkname", path: "path", Icon: Settings, subLinks: [{ linkName: "linkname", path: "path" }] }],
    isMobileSidebar: false,
    setMobileSidebar: (): void => { }


})


function Layout({ children }: { children: React.ReactNode }) {

    const [isOpen, setOpen] = useState<boolean>(false)
    const [isMobileSidebar, setMobileSidebar] = useState<boolean>(false)


    return (
        <>
            <AdminContext.Provider value={{ isOpen, setOpen, isMobileSidebar, setMobileSidebar, links }}>

                <ChakraProvider>
                    <div className='flex h-screen overflow-hidden bg-[#f3f4f6] dark:bg-gray-950'>
                        <Sidebar />
                        <MobileSidebar className={''} />
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