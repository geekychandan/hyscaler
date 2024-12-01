"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import logo from "components/ui/hyscaler-logo.svg"
import Link from 'next/link'

export const Header = () => {
    const path=usePathname()
    useEffect(()=>{
        console.log(path);
    })
  return (
    <div className='flex p-4 items-center justify-between bg-opacity-80 bg-gray-900 text-white shadow-sm'>
      <div className="logo cursor-pointer ">
        <Image src={logo} alt="Hyscaler Logo" className="h-10  "  style={{width:200}} />
      </div>
        {/* <Image src={logo} alt='logo' width={160} height={100}  style={{ width: "auto", height: "auto" }}   /> */}
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'}`}>Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer `}><Link href="/">Home</Link></li>
        </ul>
        <UserButton/>
    </div>
  )
}
