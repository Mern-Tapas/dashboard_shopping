import React from 'react'


function layout({ children }: { children: React.ReactNode }) {


    return (
        <>
            <div className='bg-gray-100 flex h-screen overflow-hidden '>
                <div className='w-[198px] hidden xl:block bg-white shrink-0 border-r dark:bg-gray-800 h-full'>

                </div>
                <div className="h-[100vh] w-full overflow-y-scroll">
                    <div className='h-[60px] bg-white border-b w-full sticky top-0'>

                    </div>
                    <div className='max-w-screen-xl contanier mx-auto px-2 '>

                        {children}

                    </div>

                </div>
            </div>
        </>
    )
}

export default layout