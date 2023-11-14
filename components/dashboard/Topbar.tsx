import React from 'react'
import { WrapItem, Avatar } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from '@chakra-ui/react'
import Link from 'next/link'
import ThemeChanger from '../ThemeChanger'
import SidebarButton from '../SidebarButton'
import Div from '@/components/Div'


function Topbar() {
    return (
        <Div className='z-20 component-Topbar h-[60px] w-full sticky top-0 border-b  '>
            <div className='max-w-screen-xl flex justify-between h-full px-2 mx-auto my-auto'>
                <div className="flex items-center">
                    <SidebarButton />
                </div>
                <div>
                    <ThemeChanger />
                </div>
                <div className="flex items-center dark:text-white">
                    <Menu  >
                        <MenuButton className='relative '>
                            <WrapItem >
                                <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                        </MenuButton>
                        <MenuList className='dark:bg-black dark:border-slate-500 absolute -right-8'>
                            <MenuGroup className='text-sm dark:text-slate-400 ' title='Profile'>
                                <Link className='dark:bg-black' href="d">
                                    <MenuItem className='text-sm dark:bg-black dark:hover:bg-gray-500'>My Account</MenuItem>
                                </Link>
                                <MenuItem className='text-sm dark:bg-black dark:hover:bg-gray-500'>Payments </MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup className='text-sm dark:text-slate-400' title='Help'>
                                <MenuItem className='text-sm dark:bg-black dark:hover:bg-gray-500 '>Docs</MenuItem>
                                <MenuItem className='text-sm dark:bg-black dark:hover:bg-gray-500'>FAQ</MenuItem>
                                <MenuItem className='text-sm dark:bg-black dark:hover:bg-gray-500 text-red-600 dark:text-red-600 hover:bg-red-600 dark:hover:bg-red-600 hover:text-white dark:hover:text-white'>Logout</MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                </div>
            </div>


        </Div>
    )
}

export default Topbar