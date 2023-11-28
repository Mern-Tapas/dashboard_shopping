'use client'
import React from 'react'
import Link from 'next/link'
import { FC, SVGProps } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
    Icon: FC<SVGProps<SVGElement>>,
    linkName: string,
    path: string,
    className: string
    isOpen?: boolean,
    iconClass?: string
}

function SidebarLinks({ Icon, linkName, path, className, isOpen, iconClass }: Props) {

    const pathname = usePathname()

    return (
        <>
            <Link href={path} className={`${className} relative  transition transition-all ease-in-out group/item`}>
                <div className={`icon h-[30px] w-[30px]  flex justify-center items-center rounded `}>
                    <Icon className={` ${(pathname?.split("/")[2] == path.split("/")[2]) ? "" : "dark:text-slate-300 text-slate-500"} ${iconClass}`} />
                </div>
                <div className={`transition-all ease-in-out ${isOpen ? "block xl:hidden " : "hidden pointer-events-none xl:block"}   ms-2 text-sm`}>
                    <p className={`text-xs`}>{linkName}</p>
                </div>
                <span className={`${isOpen ? "xl:group-hover/item:opacity-100" : "md:group-hover/item:opacity-100 xl:group-hover/item:opacity-0"} absolute text-slate-500 dark:text-slate-200 dark:bg-slate-900 dark:border-slate-500 left-10 bg-white px-2 py-2 shaodw border border-slate-300 rounded text-xs transition-all translate-x-0 group-hover/item:translate-x-2 opacity-0 `}>{linkName}</span>
                <span className={`${isOpen ? "xl:group-hover/item:opacity-100" : "md:group-hover/item:opacity-100 xl:group-hover/item:opacity-0"} absolute text-slate-500 dark:text-slate-200 dark:bg-slate-900 dark:border-slate-500 left-9 bg-white p-1 shaodw border  border border-slate-300 border-t-0 border-r-0 text-xs transition-all translate-x-0 group-hover/item:translate-x-2 opacity-0 rotate-45 `}></span>
            </Link>
        </>
    )
}

export default SidebarLinks