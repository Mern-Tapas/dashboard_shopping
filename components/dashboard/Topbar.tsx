import React from 'react'
import { WrapItem, Avatar } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from '@chakra-ui/react'
import Link from 'next/link'
import ThemeChanger from '../ThemeChanger'
import SidebarButton from '../SidebarButton'


function Topbar() {
    return (
        <div className='z-20 component-Topbar h-[60px] bg-white dark:bg-gray-900 dark:text-white w-full sticky top-0 flex justify-between px-4  border-b border-slate-300 dark:border-slate-600 '>

            <div className="flex items-center">
                <SidebarButton />
            </div>
            <div>
                <ThemeChanger />
            </div>
            <div className="flex items-center ">
                <Menu  >
                    <MenuButton>
                        <WrapItem >
                            <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />
                        </WrapItem>
                    </MenuButton>
                    <MenuList className='dark:bg-gray-900 dark:border-slate-500 '>
                        <MenuGroup className='text-sm dark:text-slate-400 ' title='Profile'>
                            <Link className='dark:bg-gray-900' href="d">
                                <MenuItem className='text-sm dark:bg-gray-900 dark:hover:bg-gray-500'>My Account</MenuItem>
                            </Link>
                            <MenuItem className='text-sm dark:bg-gray-900 dark:hover:bg-gray-500'>Payments </MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup className='text-sm dark:text-slate-400' title='Help'>
                            <MenuItem className='text-sm dark:bg-gray-900 dark:hover:bg-gray-500 '>Docs</MenuItem>
                            <MenuItem className='text-sm dark:bg-gray-900 dark:hover:bg-gray-500'>FAQ</MenuItem>
                            <MenuItem className='text-sm dark:bg-gray-900 dark:hover:bg-gray-500 text-red-600 dark:text-red-600 hover:bg-red-600 dark:hover:bg-red-600 hover:text-white dark:hover:text-white'>Logout</MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            </div>



        </div>
    )
}

export default Topbar