import React from 'react'
import { Divider } from '@chakra-ui/react'
import Image from 'next/image'

interface Props {
    isOpen: boolean
}

function Sidebar({ isOpen }: Props) {
    return (
        <div className={`${isOpen ? "w-[60px]" : "w-[198px]"} border-r border-slate-300 hidden transition-all xl:block  bg-white shrink-0  dark:bg-gray-900 h-full dark:border-slate-600 `}>
            <div className={`${isOpen ? "px-2" : "px-5"}`}>
                <div className='flex logo-box h-[140px] '>
                    <div className="m-auto w-[70px]">
                        <Image className='object-cover ' src={'/stock/images/brand/logo-blue.png'} alt='logo' height={400} width={400} />
                    </div>
                </div>
                <div className='w-full border-b border-slate-300 dark:border-slate-600'></div>
            </div>
            <div className={`${isOpen ? "px-2" : "px-5"}`}>
                d
            </div>
        </div>
    )
}

export default Sidebar