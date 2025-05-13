
import React from 'react'
import './hero.scss';

import Navbar from '@/components/Navbar/Navbar';
import FourBtn from '../fourBtn/FourBtn';

const Hero = () => {
  return (
      <div id='Hero'>
        <Navbar width='noNav' />
          <div className="Line2x mt-[92px] lg:mt-[55px]  h-fit ">
                  <div className="more-heading">
                      <h3  >Revolutionize crypto trading</h3>
                      <h3>Effortless Crypto Success</h3>
                      <h3> Maximize Profits, Minimize Stress</h3>
                  </div>
              <div className="block">
                  <div className="boxa">
                  <h3 className='a-heading'>Revolutionize Crypto Trading</h3>
                  <p >Experience the future of trading with artificial intelligence and copy trading, earning from the crypto market effortlessly while you sleep</p>
                  <FourBtn />
                 
              </div>
              <div  className={`boxb `}>
              </div>
              </div>
              
          </div>
    </div>
  )
}

export default Hero