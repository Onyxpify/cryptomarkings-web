'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
const reactUrl = process.env.NODE_ENV === 'development'? process.env.NEXT_PUBLIC_REACT_URL_DEV:process.env.NEXT_PUBLIC_REACT_URL
// import './navbar.scss'
interface props {
    data: any,
}
const NavClient = ({ data }: props) => {
    let router = usePathname();
    
  return (
      <>
          {
              data.map((item:any) => {
                  return (
                      <Link  id={router === item.to?"active":""} href={reactUrl+item.to} className={`items ${item.class}`} key={item.id}>
                          {/* <span className='icons'> {item.icon} </span> */}
                          <span className='text'> {item.text} </span>
                      </Link>
                  )
              })
          }
    </>
  )
}

export default NavClient