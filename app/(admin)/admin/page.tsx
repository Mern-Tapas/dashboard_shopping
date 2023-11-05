'use client'
import React from 'react'
import Count from '@/components/Count'

function Page() {
  return (
    <>
      <div className='grid gap-3 lg:grid-cols-4 grid-cols-2 my-3 '>

        <Count />
        <Count />
        <Count />
        <Count />

      </div>

      <div className="mt-4 bg-white dark:bg-gray-900 h-[600px] rounded-lg border border-slate-300 dark:border-slate-500">

      </div>
    </>

  )
}

export default Page