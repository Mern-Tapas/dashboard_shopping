import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

function ThemeChanger() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()


    useEffect(() => {
        setMounted(true)
    }, [])


    if (!mounted) {
        return null
    }
    return (
        <>
            <div className=''>
                <button className='p-3 rounded border ms-2 dark:text-white' onClick={() => { setTheme('light') }}>L</button>
                <button className='p-3 rounded border ms-2 dark:text-white' onClick={() => { setTheme('dark') }}>D</button>
            </div>
        </>
    )
}

export default ThemeChanger