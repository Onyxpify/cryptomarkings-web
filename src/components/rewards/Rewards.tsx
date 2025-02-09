import './rewards.scss';

import Dash_line1 from '../dashboard/dash_line1/Dash_line1';
import Bonus from './bonus/Bonus';
import Copy from './copy/Copy';
import { useRecoilValue } from 'recoil';
import { hideSide } from '../atoms/rewards';
import React from 'react';
import { userInfo } from '../atoms/userInfo';
const nextUrl = import.meta.env.MODE === "development"? import.meta.env.VITE_NEXT_URL_DEV:import.meta.env.VITE_NEXT_URL;

const Rewards = () => {
  let hide = useRecoilValue(hideSide);
  let user = useRecoilValue(userInfo);
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
        
        <Copy text='Your Referral Link' copy={`${nextUrl}/register/${user?.username}`} />
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

export default React.memo(Rewards)