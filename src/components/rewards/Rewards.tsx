import React from 'react'
import Dash_line1 from '../dashboard/dash_line1/Dash_line1';
import './rewards.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { svgs } from '../svgs';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Bonus from './bonus/Bonus';
import Footer from '../Footer/Footer';

const Rewards = () => {
   const notify = () => toast.success("Copied",{position: 'top-center',autoClose: 500,});
  return (
    <div id='Rewards'>
      <Dash_line1 />
      <div className="line2">
        <h3>
          Welcome to Rewards
        </h3>
        <div className="copy">
          <span className="link">My Referral Link</span>
          <CopyToClipboard  onCopy={()=> {notify()}} text="cryptomarkings.com/referral-sample-link">
            <button><span>cryptomarkings.com/referral-sample-link</span> <span className='copyIcon'>{svgs.copy}</span> </button>
          </CopyToClipboard>
          </div>
    
      </div>
      <Bonus />
       {/* <Footer bg='white' color='#808080' /> */}
    <ToastContainer />
    </div>
  )
}

export default Rewards