import React, { useContext } from 'react'
import SidebarButton from './SidebarButton'
import Search from '@/public/stock/icons/search.svg'
import Link from 'next/link'
import Div from '@/components/Div'

function AdminHeader() {

  const links = {

  }


  return (
    <div className='w-full sticky top-0'>
      <Div className='z-20 component-Topbar dark:text-white  border-b'>
        <div className='h-[60px] flex flex-col p-2 max-w-screen-xl contanier mx-auto px-4'>

          <div className='mt-auto flex justify-between'>
            <div className='flex items-center'>
              <SidebarButton />
              <h1 className='ms-2 text-2xl font-bold '>Settings</h1>
            </div>
            <div>
              <div className='relative'>
                <input type="text" placeholder='Search' className='flex text-xs border ps-11 p-2 rounded-md border-slate-300 dark:border-slate-600 bg-white/0 dark:focus:outline-blue-600 focus:outline-blue-500' />
                <div className=' text-gray-400  absolute left-3 top-[50%] -translate-y-[50%] '>
                  <Search />
                </div>
              </div>

            </div>

          </div>
        </div>
      </Div>
      <Div className='z-20 component-Topbar dark:text-white  border-b '>
        <div className='h-[50px] max-w-screen-xl contanier mx-auto px-4'>
          <div className='flex h-full items-center'>
            <Link className='me-3 text-xs relative h-full flex items-center px-2' href={'/admin/product/add'}>
              Products
              <span className='w-full bg-blue-600 h-[5px] absolute bottom-0 left-0'></span>
            </Link>
            <Link className='me-3 text-xs relative h-full flex items-center px-2' href={'/admin/product/add'}>
              Categories
            </Link>
          </div>
        </div>
      </Div>
    </div>
  )
}

export default AdminHeader