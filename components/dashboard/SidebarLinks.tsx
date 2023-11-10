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
            <Link href={path} className={`${className} relative  transition transition-all ease-in-out group/item`}>
                <div className="icon text-slate-500 xl:h-[30px] xl:w-[30px]  flex justify-center items-center   rounded dark:text-slate-300">
                    <Icon />
                </div>
                <div className={` transition-all ease-in-out ${isOpen ? "block xl:hidden" : "hidden xl:block"} dark:text-slate-300  ms-2 text-sm`}>
                    <p>{linkName}</p>
                </div>
                <span className={`${isOpen ? "xl:group-hover/item:opacity-100" : "md:group-hover/item:opacity-100 xl:group-hover/item:opacity-0"} absolute text-slate-500 left-10 bg-white px-2 shaodw border rounded text-sm transition-all translate-x-0 group-hover/item:translate-x-2 opacity-0 `}>{linkName}</span>
            </Link>
        </>
    )
}

export default SidebarLinks