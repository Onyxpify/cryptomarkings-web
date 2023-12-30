import React from 'react'
import { svgs } from '../../../../svgs'
import { useRecoilState, useRecoilValue } from 'recoil';
import { hideSide } from '../../../../atoms/rewards';
import { selectedSide, sideComps } from '../../../../atoms/sidebar';
import './depositeline1.scss';

interface p{
    title?: string,
    component?: any
}
const DepositeLine1 = ({ title,component }: p) => {
     let [hide, setHide] = useRecoilState(hideSide);
  let [comp, setComp] = useRecoilState(sideComps);
  let selected = useRecoilValue(selectedSide);
  return (
      <div id='DepositeLine1'>
           <div className="cell1">
              <span className='back' onClick={(e) => { setHide({ class: '', comp: <></> }); setComp(selected) }} > {svgs.ld} </span>
             
              <span className="title"> {title} </span>
              
              
          </div>
    </div>
  )
}

export default DepositeLine1