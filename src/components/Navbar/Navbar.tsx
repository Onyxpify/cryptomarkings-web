import React, { useRef, useState } from 'react'
import './navbar.scss'
import { Link, useLocation } from 'react-router-dom'
import { NavData } from './navbarData';



const Navbar = () => {
  let [list, setList] = useState(NavData);
  let { pathname } = useLocation();
  let noNav = ['/'];
  let lent = useRef(noNav.includes(pathname)?'noNav': '');
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
    <div className={`Navbar ${lent.current}`}>
      <Link to={'/'} className="logo"></Link>
      <div className="group">
        {
              list.map(item => {
                  return (
                      <Link onClick={()=>  handleActive(item.id)} id={item.active} to={item.to} className={`items ${item.class}`} key={item.id}>
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