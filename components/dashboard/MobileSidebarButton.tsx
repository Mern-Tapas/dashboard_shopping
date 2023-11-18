import React from 'react'
import MenuSvg from '@/public/stock/icons/menu-1.svg'
import Close from '@/public/stock/icons/close.svg'


function MobileSidebarButton({ className, buttonAction, value }: { className: string, buttonAction: React.Dispatch<React.SetStateAction<boolean>>, value: boolean }) {
    return (
        <button className={`${className} border p-1 rounded border-slate-200 dark:border-slate-800`} onClick={() => { buttonAction(!value) }} >
            <div className='relative h-[26px] w-[26px]'>
                <MenuSvg className={`${value ? "opacity-0 rotate-90" : ""} transition duration-200 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-700 dark:text-slate-300`} />
                <Close className={`${value ? "" : "opacity-0 rotate-90"} transition duration-200 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-700 dark:text-slate-300`} />
            </div>
        </button>
    )
}

export default MobileSidebarButton