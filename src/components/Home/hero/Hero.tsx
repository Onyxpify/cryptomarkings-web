import React from 'react'
import './hero.scss';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import FourBtn from '../fourBtn/FourBtn';

const Hero = () => {
  return (
      <div id='Hero'>
        <Navbar width='noNav' />
          <div className="line2">
                  <div className="more-heading">
                      <h3>Revolutionize crypto trading</h3>
                      <h3>Effortless Crypto Success</h3>
                      <h3> Maximize Profits, Minimize Stress</h3>
                  </div>
              <div className="block">
                  <div className="boxa">
                  <h3 className='a-heading'>Revolutionize Crypto Trading</h3>
                  <p>Experience the future of trading with artificial intelligence and copy trading, earning from the crypto market effortlessly while you sleep</p>
                  <FourBtn />
              </div>
              <div className="boxb">
                  {/* <img src='/hero_image.svg' alt="hero image" /> */}
              </div>
              </div>
              
          </div>
    </div>
  )
}

export default Hero