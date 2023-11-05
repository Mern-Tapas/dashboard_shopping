'use client'
import React from 'react'
import Count from '@/components/Count'
import GridLayout from '@/components/GridLayout'
import ColumnsH from '@/components/ColumnsH'
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot } from '@chakra-ui/react'
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
        <ColumnsH scroll={true} className='col-span-4 lg:col-span-5 xl:col-span-8' heading="the container" subHeading="Daily Chart Details" >

          <table className='w-full p-2 text-left text-slate-600 dark:text-slate-300'>
            <thead>
              <tr>
                <th className='p-1'>Head</th>
                <th className='p-1'>Head</th>
                <th className='p-1'>Head</th>
              </tr>
            </thead>
            <tbody className='dark:text-slate-400'>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
              <tr>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
                <td className='p-1'>Head</td>
              </tr>
            </tbody>
          </table>

        </ColumnsH>
        <ColumnsH scroll={false} className='col-span-4 lg:col-span-3 xl:col-span-4' heading="the container" subHeading="Daily Chart Details" >

        </ColumnsH>
      </GridLayout>


    </>


  )
}

export default Page