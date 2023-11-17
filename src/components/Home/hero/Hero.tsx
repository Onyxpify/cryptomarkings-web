import React from 'react'
import Navbar from '../../Navbar/Navbar';
import './hero.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
      <div id='Hero'>
          <Navbar />
          <div className="line2">
              <div className="boxa">
                  <h3>Revolutionize Crypto Trading</h3>
                  <p>Experience the future of trading with artificial intelligence and copy trading, earning from the crypto market effortlessly while you sleep</p>
                  <div className="btns">
                      <Link className='get-started' to='/register'>Get Started</Link>
                      <Link className='watch' to='#'>Watch Video</Link>
                  </div>
              </div>
              <div className="boxb"></div>
          </div>
    </div>
  )
}

export default Hero