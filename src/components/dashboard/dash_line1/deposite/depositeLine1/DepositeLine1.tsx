import { svgs } from '../../../../svgs'
import { useRecoilState, useRecoilValue } from 'recoil';
import { hideSide } from '../../../../atoms/rewards';
import { selectedSide, sideComps } from '../../../../atoms/sidebar';
import './depositeline1.scss';
import React from 'react';

interface p{
    title?: string,
    component?: any
}
const DepositeLine1 = ({ title }: p) => {
     let [, setHide] = useRecoilState(hideSide);
  let [, setComp] = useRecoilState(sideComps);
  let selected = useRecoilValue(selectedSide);
  return (
      <div id='DepositeLine1'>
           <div className="cell1">
              <span className='back' onClick={() => { setHide({ class: '', comp: <></> }); setComp(selected) }} > {svgs.ld} </span>
             
              <span className="title"> {title} </span>
              
              
          </div>
    </div>
  )
}

export default React.memo(DepositeLine1)