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
                The current theme is: {theme}
                <button className='p-3 rounded border ms-2' onClick={() => { setTheme('light') }}>Light Mode</button>
                <button className='p-3 rounded border ms-2' onClick={() => { setTheme('dark') }}>Dark Mode</button>
            </div>
        </>
    )
}

export default ThemeChanger