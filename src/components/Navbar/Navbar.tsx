"use client"
import React, {  useState } from 'react'
import './navbar.scss'
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
    <div className={`Navbar ${width?width: ''} `}>
      <Link href={'/'} className="logo"></Link>
      <div className="group">
        <NavClient data={NavData} />
      </div>
      <div onClick={()=> setIsOpen(p=> !p) } className="more"></div>
        {
          isOpen && <MobileDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
        }
    </div>
  )
}

export default Navbar