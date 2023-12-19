import React from 'react'
import Logo from '../../logo/Logo'
import { dashNavList } from './dashNavData'
import { Link } from 'react-router-dom'
import { IoMdNotifications } from "react-icons/io";
import user1 from '../../../assets/user1.svg';
import approximately from '../../../assets/approximately.svg'
import chevrondown from '../../../assets/chevrondown.svg';
import './dashnav.scss';

const DashNav = () => {
  return (
      <div id='DashNav'>
          <Logo />
      <div className="line2">
        {
          dashNavList.map(each => {
            return (
              <div key={each.id} className={`cell ${each.class}`}>
                  <div className="pair bt"> {each.pair} </div>
                <div className="price">
                  {
                  each.equivalent?<>  {each.price} <span className="pair"><img src={approximately} alt="approximately" /> {each.equivalent} </span> </>: each.price
                 }
                </div>
                <div className="rate">
                   {each.rate}
                
                </div>
              </div>
              
            )
          })
        }
      </div>
      <div className="line3">
        <Link className='deposite' to={'#'}>Deposit</Link>
        <Link className='bell'to={'#'}><IoMdNotifications /> <div className="green"></div> </Link>
        <span className="user">
          <img src={user1} alt="user image" />
          <img className='drop' src={chevrondown} alt="dropdown icon" />
        </span>
      </div>
    </div>
  )
}

export default DashNav