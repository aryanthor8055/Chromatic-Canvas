'use client';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Header = () => {
    const path=usePathname()
  return (
    <header className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap'>
        <div className='backdrop-blue-md bg-white/10 border border-white/20 rounded-full px-8 py-2 flex items-center justify-between gap-8'>

        <Link href='/' className='mr-10 md:mr-20'>
        <Image src='/logo-canvas.svg' alt='ChromaticCanvasLogo' className='min-w-24 object-cover' width={96} height={24}/>
        </Link>
        {path==='/' && (<div className='hidden md:flex space-x-6'>
            <Link href='#features' className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'>
            Features
            </Link>
             <Link href='#pricing' className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'>
            Pricing
            </Link>
             <Link href='#features' className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'>
            Contact
            </Link>
            </div>)}

            <div className='flex items-center gap-3 ml-10 md:ml-20'>auth</div>
        </div>
    </header>
  )
}

export default Header