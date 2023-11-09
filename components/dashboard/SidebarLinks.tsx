import React from 'react'
import Link from 'next/link'

type Props = {
    Icon: string,
    linkName: string,
    path: string,
    className: string
    isOpen?: boolean
}

function SidebarLinks({ Icon, linkName, path, className, isOpen }: Props) {
    return (
        <>
            <Link href={path} className={`${className} relative  transition transition-all ease-in-out `}>
                <div className="icon text-slate-500 xl:h-[30px] xl:w-[30px]  flex justify-center items-center   rounded dark:text-slate-300">
                    <Icon />
                </div>
                <div className={` transition-all ease-in-out ${isOpen ? "block xl:hidden" : "hidden xl:block"} dark:text-slate-300  ms-2 text-sm`}>
                    <p>{linkName}</p>
                </div>
            </Link>
        </>
    )
}

export default SidebarLinks