import React from 'react';
import './dash_line1.scss';
import user1 from '../../../assets/user1.svg';
import { FaRegEyeSlash } from "react-icons/fa";
import IconTextBtn from '../../IconTextBtn/IconTextBtn';
import { svgs } from '../../svgs';
import Deposite from './deposite/Deposite';
import { useRecoilState } from 'recoil';
import { hideSide } from '../../atoms/rewards';
import { sideComps } from '../../atoms/sidebar';
import Withdrawal from './withdrawal/Withdrawal';
import History from './history/History';

const Dash_line1 = () => {
    let [hide, setHide] = useRecoilState(hideSide);
    let [comp,setComp] = useRecoilState(sideComps);
    

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
          {/* setHide({class: 'no-left',comp: <Deposite />}) */}
          <div className="boxb">
              <IconTextBtn action={()=> { setHide({ class: "no-left", comp: <></> }); setComp(<Deposite />)}}  text='Deposit' icon={svgs.deposite} bg='#003D2B' color='#95CEA5' href='#' />
              <IconTextBtn action={()=> { setHide({ class: "no-left", comp: <></> }); setComp(<Withdrawal />)}} text='Withdraw' icon={svgs.withdraw} bg='#95CEA5' color='#003D2B' href='#' />
              <IconTextBtn action={()=> { setHide({ class: "no-left", comp: <></> }); setComp(<History />)}} text='History' icon={svgs.history} bg='#95CEA5' color='#003D2B' href='#' />
          </div>
    </div>
  )
}

export default Dash_line1