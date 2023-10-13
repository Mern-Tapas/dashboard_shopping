'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/layouts/Container'
import { usePathname } from 'next/navigation'

function Header() {

    const pathname: string = usePathname()

    const [windowsPosition, setWinPosition] = useState<number>(0)

    type Link = {
        link: string;
        path: string;
    };
    const links: Link[] = [
        { link: "home", path: "/" },
        { link: "product", path: "/products" },
        { link: "about", path: "/about" },
        { link: "contact", path: "/contacts" },
        { link: "admin", path: "/admin" },
    ]



    useEffect(() => {
        window.addEventListener("scroll", () => {
            setWinPosition(window.scrollY)
        })

    }, [windowsPosition])

    return (
        <div className={` ${(windowsPosition >= 100) ? "shadow-xl shadow-black/5" : ""} transition h-[65px] bg-white sticky top-0`}>
            <Container className="h-full max-w-screen-xl m-auto justify-between items-center flex ">

                <Link href='/' className='logo h-[45px] w-fit '>
                    <Image alt='logo' src="/stock/images/brand/logo.jpg" className=' block md:hidden h-full w-full' height={200} width={200} />
                    <Image alt='logo' src="/stock/images/brand/logo2.jpg" className=' md:block hidden h-full w-full' height={200} width={200} />
                </Link>

                <div className='links-section hidden md:block'>
                    {links.map((link, index) => {
                        return <Link key={index} className={`${(link.path == pathname) ? "bg-gray-100" : ""} capitalize hover:bg-gray-100 rounded text-sm me-3 p-2 px-3`} href={link.path}> <h6 className='inline-block'>{link.link}</h6> </Link>
                    })}
                </div>

                <div className=' buttons'>
                    <Link href='/login' className='rounded bg-gray-950 text-white hover:bg-gray-700 p-2 text-sm px-4 me-2 capitalize'><p className='inline-block'>log in</p></Link>
                    <Link href='/login' className='rounded bg-white text-gray-950 border hover:bg-gray-200 p-2 text-sm px-4 capitalize'><p className='inline-block'>sign up</p></Link>
                </div>

            </Container>
        </div>
    )
}

export default Header