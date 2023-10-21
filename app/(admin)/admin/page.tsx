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
    </>

  )
}

export default Page