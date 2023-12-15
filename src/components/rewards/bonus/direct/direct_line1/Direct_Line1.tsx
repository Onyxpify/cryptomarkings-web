import React from 'react';
import { svgs } from '../../../../svgs'
import { useRecoilState } from 'recoil';
import { hideSide } from '../../../../atoms/rewards';
import Copy from '../../../copy/Copy';
import './direct_line1.scss';
interface p{
    icon: any,
    title: string,
    link: string,
}

const Direct_Line1 = ({icon,title,link}:p) => {
    let [hide, setHide] = useRecoilState(hideSide);
  return (
    <div id="Direct_Line1">
        <div className="cell1">
              <span className='back' onClick={(e) => setHide({ class: '', comp: <></> })} > {svgs.ld} </span>
              <span className="icon"> {icon} </span>
              <span className="title"> {title} </span>
              <span className="alert"> {svgs.alert_circle2} </span>
              
          </div>
          <div className="cell2">
              <button className="withdraw">Withdraw Earnings</button>
              <Copy text='My Referral Link' copy={link} />
          </div>
      </div>
  )
}

export default Direct_Line1