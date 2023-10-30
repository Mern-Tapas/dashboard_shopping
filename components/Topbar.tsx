import React from 'react'
import { WrapItem, Avatar } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from '@chakra-ui/react'
import Link from 'next/link'


function Topbar({ sidebarButton, isOpen }: { sidebarButton: React.Dispatch<React.SetStateAction<boolean>>, isOpen: boolean }) {
    return (
        <div className='h-[60px] bg-white w-full sticky top-0 flex justify-between px-4'>

            <div className=" border flex items-center">
                <button className='' onClick={() => { sidebarButton(!isOpen) }} >open</button>
            </div>
            <div className="flex items-center">
                <Menu >
                    <MenuButton>
                        <WrapItem >
                            <Avatar name='Dan Abrahmov' size='md' src='https://bit.ly/dan-abramov' />
                        </WrapItem>
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title='Profile'>
                            <Link href="d">
                                <MenuItem>My Account</MenuItem>
                            </Link>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title='Help'>
                            <MenuItem>Docs</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            </div>



        </div>
    )
}

export default Topbar