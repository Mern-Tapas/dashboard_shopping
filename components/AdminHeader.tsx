'use client'
import React, { useContext, useEffect, useState } from 'react'
import SidebarButton from './SidebarButton'
import Search from '@/public/stock/icons/search.svg'
import Link from 'next/link'
import Div from '@/components/Div'
import { AdminContext, Sublink } from '@/app/(admin)/layout'
import { usePathname } from 'next/navigation'

function AdminHeader() {

  const { links } = useContext(AdminContext)
  const pathname = usePathname()

  const [thisPageLinks, setLinks] = useState<Sublink[]>([
    { linkName: "", path: "" }
  ])

  useEffect(() => {

    links.filter((link) => {
      if (link.path == pathname) {
        setLinks(link.subLinks)
      }
    })

  }, [])

  return (
    <div className='w-full sticky top-0'>
      <Div className='z-20 component-Topbar dark:text-white  border-b'>
        <div className='h-[60px] flex flex-col p-2 max-w-screen-xl contanier mx-auto px-4'>

          <div className='mt-auto flex justify-between'>
            <div className='flex items-center'>
              <SidebarButton />
              <h1 className='ms-2 text-2xl font-bold '>Settings </h1>
            </div>
            <div>
              <div className='relative'>
                <input type="text" placeholder='Search' className='flex text-xs border ps-11 p-2 rounded-md border-slate-300 dark:border-slate-600 bg-white/0 outline outline-blue-500/0 focus:outline-blue-500 dark:focus:outline-blue-500' />
                <div className=' text-gray-400  absolute left-3 top-[50%] -translate-y-[50%] '>
                  <Search />
                </div>
              </div>
            </div>
            </div>
        </div>
      </Div>
      <Div className='z-20 component-Topbar dark:text-white  border-b '>
        <div className='h-[38px] max-w-screen-xl contanier mx-auto px-4'>
          <div className='flex h-full items-center'>

            {thisPageLinks.map((link) => {
              return <Link className='me-3 text-xs relative h-full flex items-center px-2' href={link.path}>
                {link.linkName}
                <span className='w-full bg-blue-600 h-[4px] absolute bottom-0 left-0 rounded-t-lg'></span>
              </Link>
            })}
          </div>
        </div>
      </Div>
    </div>
  )
}

export default AdminHeader