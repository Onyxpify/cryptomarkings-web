import React from 'react';
import './dash_line1.scss';
import user1 from '../../../assets/user1.svg';
import { FaRegEyeSlash } from "react-icons/fa";
import IconTextBtn from '../../IconTextBtn/IconTextBtn';
import { svgs } from '../../svgs';

const Dash_line1 = () => {
  return (
      <div id='Dash_line1'>
          <div className="boxa">
              <div className="cell1">
                  <img src={user1} alt="user image" />
              </div>
              <div className="cell2">
                  <h3>Welcome James</h3>
                  <h1>10,000 USDT <FaRegEyeSlash className='eye' /> </h1>
                  <p>Asset Balance</p>
              </div>
          </div>
          <div className="boxb">
              <IconTextBtn text='Deposit' icon={svgs.deposite} bg='#003D2B' color='#95CEA5' href='#' />
              <IconTextBtn text='Withdraw' icon={svgs.withdraw} bg='#95CEA5' color='#003D2B' href='#' />
              <IconTextBtn text='History' icon={svgs.history} bg='#95CEA5' color='#003D2B' href='#' />
          </div>
    </div>
  )
}

export default Dash_line1