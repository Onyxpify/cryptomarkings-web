"use client"
import React, { useState } from 'react'
import { NavData } from './navbarData';
import Link from 'next/link';
import NavClient from './NavClient';
import MobileDropdown from '../mobileDropdown/DropDown';

interface props {
  width?: string | number,
}

const Navbar = ({width}:props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`w-full bg-[#003d2b] shadow-md rounded-b-xl px-4 py-2 flex items-center justify-between z-50 fixed top-0 left-0 md:static ${width ? width : ''}`}> 
      {/* Logo */}
      <Link href={'/'} aria-label="Home" className="logo flex items-center w-[12rem] h-[4.5rem] bg-[url('/png/Logo4.png')] bg-no-repeat bg-left bg-[length:90%]" />
      {/* Nav Group */}
      <div className="group hidden md:flex items-center gap-x-2">
        <NavClient data={NavData} />
      </div>
      {/* Hamburger */}
      <button className="more flex md:hidden ml-4 w-8 h-8 items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-[#95cea5]" onClick={()=> setIsOpen(p=> !p)} aria-label="Open menu">
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      {isOpen && <MobileDropdown isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  )
}

export default Navbar