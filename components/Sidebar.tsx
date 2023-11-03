import React from 'react'

interface Props {
    isOpen: boolean
}

function Sidebar({ isOpen }: Props) {
    return (
        <div className={`${isOpen ? "w-[70px]" : "w-[198px]"} border-r hidden transition-all xl:block  light:bg-white shrink-0  dark:bg-gray-800 h-full`}>

        </div>
    )
}

export default Sidebar