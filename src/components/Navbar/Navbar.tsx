import React, { useRef, useState } from 'react'
import './navbar.scss'
import { Link, useLocation } from 'react-router-dom'
import { NavData } from './navbarData';



const Navbar = () => {
  let [list, setList] = useState(NavData);
  let { pathname } = useLocation();
   
  return (
    <div className={`Navbar`}>
      <Link to={'/'} className="logo"></Link>
      <div className="group">
        {
              list.map(item => {
                  return (
                      <Link  id={pathname === item.to? 'active': ''} to={item.to} className={`items ${item.class}`} key={item.id}>
                          {/* <span className='icons'> {item.icon} </span> */}
                          <span className='text'> {item.text} </span>
                      </Link>
                  )
              })
          }
      </div>
    </div>
  )
}

export default Navbar