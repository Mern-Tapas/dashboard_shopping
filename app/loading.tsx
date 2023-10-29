import React from 'react'
import { Spinner } from '@chakra-ui/react'

function loading() {
    return (
        <div className='min-h-screen flex'>
            <div className='w-fit h-fit m-auto'>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </div>
        </div>
    )
}

export default loading