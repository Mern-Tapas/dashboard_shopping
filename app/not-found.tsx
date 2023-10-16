import ImageBox from '@/components/ImageBox'
import React from 'react'
import Link from 'next/link'

function notfound() {
  return (
    <div className='min-h-screen  flex'>

      <div className="m-auto">
        <div className=" max-w-[400px] flex flex-col" >
          <ImageBox className='' height={500} width={500} src='/stock/images/notfound.jpg' alt='page-not-found' />
        </div>
        <h1 className='text-center font-bold text-2xl mb-2'>Page Not Found</h1>
        <p className='text-sm text-gray-400 text-center '>We're sorry thc page vou requested could not be found
          <br /> piease go back to the hotnepage</p>
        <Link href='/' className='p-2 px-6 bg-blue-600 text-white rounded-full block w-fit mt-2 mx-auto'>Back to Home</Link>
      </div>
    </div>
  )
}

export default notfound