import React, { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import { MobileNavData } from '../MobileNav/mobileNavData';

const Navbar = () => {
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
    <div id='Navbar'>
      <Link to={'/'} className="logo">BlockVilla</Link>
      <div className="group">
        {
              list.map(item => {
                  return (
                      <Link onClick={()=>  handleActive(item.id)} id={item.active} to={item.to} className={`items`} key={item.id}>
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