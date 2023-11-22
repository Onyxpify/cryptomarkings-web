'use client';

import React, { useState } from 'react'
import { MobileNavData } from './mobileNavData';
import './mobilenav.scss';
import Link from 'next/link';

const MobileNav = () => {
    let [list, setList] = useState(MobileNavData);
    function handleActive(id:number) {
        let upd = list.map(each => {
            if (each.id === id) {
                each.active = 'active';
            } else {
                each.active = '';
            }
            return each;
        })
        setList(upd);
    }
  return (
      <div id='MobileNav'>
          {
              list.map(item => {
                  return (
                      <Link onClick={()=>  handleActive(item.id)} id={item.active} href={item.to} className={`items`} key={item.id}>
                          <span className='icons'> {item.icon} </span>
                          <span className='text'> {item.text} </span>
                      </Link>
                  )
              })
          }
    </div>
  )
}

export default MobileNav