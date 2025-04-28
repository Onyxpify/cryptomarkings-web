'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { navDataType } from './navbarData';
interface p{
    data: Array<navDataType>
}
const NavClient = ({ data }:p) => {
    const router = usePathname();
    
  return (
      <>
          {
              data.map((item:navDataType) => {
                  return (
                      <Link  id={router === item.to?"active":""} href={item.to} className={`items ${item.class}`} key={item.id}>
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