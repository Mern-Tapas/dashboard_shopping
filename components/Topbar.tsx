import React from 'react'


function Topbar({ sidebarButton, isOpen }: { sidebarButton: React.Dispatch<React.SetStateAction<boolean>>, isOpen: boolean }) {
    return (
        <div className='h-[60px] bg-white w-full sticky top-0 flex justify-between'>

            <div className="">

                <button>
                    click
                </button>
               
            </div>



            <button onClick={() => { sidebarButton(!isOpen) }} >open</button>
        </div>
    )
}

export default Topbar