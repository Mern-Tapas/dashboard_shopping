'use client'
import React from 'react'
import Count from '@/components/Count'
import GridLayout from '@/components/GridLayout'

function Page() {
  return (
    <>
      <div className='grid gap-3 lg:grid-cols-4 grid-cols-2 mt-7 '>

        <Count />
        <Count />
        <Count />
        <Count />

      </div>

      <GridLayout className="mt-7" sm={2} md={4} lg={8} xl={12}>
        <div className='border dark:border-slate-600 rounded-lg dark:bg-gray-900 bg-white border-slate-300 xl:col-span-4 lg:col-span-3 md:col-span-4 sm:col-span-4'>
          d
        </div>
        <div className='overflow-hidden border dark:border-slate-600 rounded-lg dark:bg-gray-900 bg-white border-slate-300 xl:col-span-8 lg:col-span-5 md:col-span-4 sm:col-span-4'>
          d
        </div>
      </GridLayout>


    </>


  )
}

export default Page