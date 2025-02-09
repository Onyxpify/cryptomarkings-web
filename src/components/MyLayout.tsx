"use client";
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
interface props {
    children: React.ReactNode,
}
const MyLayout = ({ children }: props) => {
    let router = usePathname();
  let noNav = ['/','/login','/register'];
  let noFooter = ['/login','/register'];

    let hideNav = useMemo(()=> {
        let action = true;
        noNav.forEach(each=> {
            if(router.includes(each)) {
                action = false
            }
        })
        return action;
    },[router])
    let hideFooter = useMemo(()=> {
        let action = true;
        noFooter.forEach(each=> {
            if(router.includes(each)) {
                action = false
            }
        })
        return action;
    },[router])

  return (
      <>
          {
              hideNav && 
              <Navbar />

         }
          {children}
          {
              hideFooter && 
             <Footer />

         }
          
      </>
  )
}

export default MyLayout