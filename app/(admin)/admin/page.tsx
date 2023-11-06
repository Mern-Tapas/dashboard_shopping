'use client'
import React from 'react'
import Count from '@/components/Count'
import GridLayout from '@/components/GridLayout'
import ColumnsH from '@/components/ColumnsH'
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot } from '@chakra-ui/react'
import TableRowWithImage from '@/components/TableRowWithImage'
import ColumnPagination from '@/components/ColumnPagination'
function Page() {
  return (
    <>
      <div className='grid gap-3 lg:grid-cols-4 grid-cols-2 mt-7 '>

        <Count />
        <Count />
        <Count />
        <Count />

      </div>

      <GridLayout className="mt-7" sm="2" md="4" lg="8" xl="12">
        <ColumnsH className='col-span-4 lg:col-span-5 xl:col-span-8 flex flex-col' heading="Recent Order" subHeading="See all recent order here" >

          <table className='w-full p-2 text-left text-slate-600 dark:text-slate-300 h-full'>
            <tbody className='dark:text-slate-400'>
              <TableRowWithImage />
              <TableRowWithImage />
              <TableRowWithImage />
              <TableRowWithImage />
              <TableRowWithImage />
              <TableRowWithImage />
            </tbody>
          </table>

          <ColumnPagination className='px-3 mt-auto' />
        </ColumnsH>

        <ColumnsH className='col-span-4 lg:col-span-3 xl:col-span-4' heading="the container" subHeading="Daily Chart Details" >

        </ColumnsH>
      </GridLayout>

    </>


  )
}

export default Page