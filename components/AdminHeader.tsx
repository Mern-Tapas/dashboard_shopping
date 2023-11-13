import React, { useContext } from 'react'
import { AdminContext, AdminContextValue } from '@/app/(admin)/layout'
import SidebarButton from './SidebarButton'
import { InputLeftElement } from '@chakra-ui/react'
import Home from '@/public/stock/icons/home.svg'
import { InputGroup } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'


function AdminHeader() {

  const { isOpen, setOpen } = useContext<AdminContextValue | any>(AdminContext)

  return (
    <div className='w-full sticky top-0'>
      <div className='z-20 component-Topbar bg-white dark:bg-gray-900 dark:text-white  px-4  border-b border-slate-300 dark:border-slate-600 '>
        <div className='h-[80px] flex flex-col p-2 max-w-screen-lg 2xl:max-w-screen-xl contanier mx-auto px-4'>

          <div className='mt-auto flex justify-between'>
            <div className='flex items-center'>
              <SidebarButton />
              <h1 className='ms-2 text-xl font-bold'>Settings</h1>
            </div>
            <div>
              <div className='relative'>
                <input type="text" placeholder='Search' className=' flex border ps-10 p-2 rounded-md border-slate-300 dark:border-slate-600  focus:outline-blue-500' />
                <div className=' text-gray-400  absolute left-2 top-[50%] -translate-y-[50%] '>
                  <Home />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      <div className='z-20 component-Topbar bg-white dark:bg-gray-900 dark:text-white  px-4  border-b border-slate-300 dark:border-slate-600 '>
        <div className='h-[50px] max-w-screen-lg 2xl:max-w-screen-xl contanier mx-auto px-4'>
          d
        </div>
      </div>
    </div>
  )
}

export default AdminHeader