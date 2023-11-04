import React from 'react'

interface Props {
    isOpen: boolean
}

function Sidebar({ isOpen }: Props) {
    return (
        <div className={`${isOpen ? "w-[70px]" : "w-[198px]"} border-r hidden transition-all xl:block  bg-white shrink-0  dark:bg-gray-900 h-full`}>
<h1>sidebar</h1>
        </div>
    )
}

export default Sidebar