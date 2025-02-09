import React, { useEffect, useRef, useState } from 'react'
import './navbar.scss'
import { NavData } from './navbarData';
import Link from 'next/link';
import NavClient from './NavClient';
interface props {
  width?: any,
}
const Navbar = ({width}:props) => {
  
  return (
    <div className={`Navbar ${width?width: ''} `}>
      <Link href={'/'} className="logo"></Link>
      <div className="group">
        <NavClient data={NavData} />
      </div>
      <div className="more"></div>
    </div>
  )
}

export default Navbar