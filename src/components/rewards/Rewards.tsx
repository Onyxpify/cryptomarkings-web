import React from 'react'
import Dash_line1 from '../dashboard/dash_line1/Dash_line1';
import './rewards.scss';

import Bonus from './bonus/Bonus';
import Copy from './copy/Copy';
import { useRecoilValue } from 'recoil';
import { hideSide } from '../atoms/rewards';

const Rewards = () => {
  let hide = useRecoilValue(hideSide);
  return (
    <>
      {
        hide.class=== '' && 
         <div id='Rewards'>
      <Dash_line1 />
      <div className="line2">
        <h3>
          Welcome to Rewards
        </h3>
        
        <Copy text='My Referrer Link' copy='cryptomarkings.com/referral-sample-link' />
      </div>
      <Bonus />
       {/* <Footer bg='white' color='#808080' /> */}
    
    </div>
      }
      {
        hide.class === 'no-left' && hide.comp
      }
    </>
  )
}

export default Rewards