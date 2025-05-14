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
      {data.map((item: navDataType) => {
        const isActive = router === item.to;
        const isRegister = item.class === 'register';
        return (
          <Link
            href={item.to}
            key={item.id}
            className={`items flex items-center
              ${isRegister
                ? 'px-5 py-2 rounded-lg shadow font-semibold bg-[#95cea5] text-[#003d2b] hover:bg-[#7bbd8e] transition'
                : 'px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#95cea5] hover:bg-white/5 transition'}
              ${isActive && !isRegister ? 'text-[#aa56f9] font-bold bg-white/10' : ''}
            `}
            target={item.to.startsWith('http') ? '_blank' : undefined}
            rel={item.to.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {item.text}
          </Link>
        )
      })}
    </>
  )
}

export default NavClient