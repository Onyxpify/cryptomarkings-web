"use client";
import { usePathname } from 'next/navigation';
import React from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
interface props {
    children: React.ReactNode,
}
const MyLayout = ({ children }: props) => {
    let router = usePathname();
  let noNav = ['/'];
  return (
      <>
          {
              !noNav.includes(router) && 
              <Navbar />

         }
          {children}
          <Footer />
      </>
  )
}

export default MyLayout