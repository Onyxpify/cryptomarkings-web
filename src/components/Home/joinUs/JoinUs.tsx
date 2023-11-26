import React from 'react';
import './joinus.scss';
import Image from 'next/image';
import FourBtn from '../fourBtn/FourBtn';

const JoinUs = () => {
  return (
      <div id='JoinUs' >
          <div className="line1">
          <h6>CRYPTOMARKINGS OFFERS</h6>
                  <h3>Join our affiliate program and start earning compensation with our various plans:</h3>
              
          </div>
          <div className="line2">
              <div className="text">
                  <div className="cell1">
                      <h3>Direct Referral Reward</h3>
                      <p>Earn from 15% to 50% of the subscription fee from your direct referrals who sign up with Cryptomarkings.</p>
                  </div>
                  <div className="cell1">
                      <h3>Binary Plan</h3>
                      <p>Receive a Daily Binary Commission of 10% based on the subscription value of your weaker leg, with no limitations.</p>
                  </div>
                  <div className="cell1">
                      <h3>Leadership Reward (Unilevel)</h3>
                      <p>Earn a percentage from the trading fees we charge your downline, extending up to your 7th level of downlines.</p>
                  </div>
              </div>
              <div className="img">
                  <Image alt='our commuinity' src='/community.svg' width={404} height={280} />
              </div>
          </div>
          <div className="line3">
              <div className="img">
                  <Image 
        className='phones' alt='phones' src='/phones.svg' width={388} height={456} />
                  <Image 
         className='dots' alt='our commuinity' src='/green_dots.svg' width={560} height={528} />
                 
              </div>
              <div className="box">
                  <h3>Download the mobile app to start exploring</h3>
                  <p>Download the app to monitor strategy statistics, activate bots, and close orders.
                      Whether you're at home or on the go, position management is at your fingertips.</p>
                  <FourBtn style='join-btns' />
              </div>

          </div>
    </div>
  )
}

export default JoinUs