import React from 'react';
import './aboutus.scss';
import LearnMore from '../learnMore/LearnMore';
import Link from 'next/link';

const AboutUs = () => {
  return (
      <div id='AboutUs'>
          <h3 className='mt-[94px] md:mt-[124px] text-start lg:text-center mb-4 md:mb-auto ms-3 ' >About Us</h3>
          <div className="line2">
              <Link target='_blank' href="https://youtube.com/@blacktinum" className="watchIcon inline-block "></Link>
          </div>
          <div className="line3">
              <h4>At Blacktinum, we&apos;ve redefined the way you trade cryptocurrencies.
                  Derived from &quot;Crypto Market Kings,&quot; we combine cutting-edge artificial intelligence algorithms with a range of innovative trading tools.
              </h4>
             <LearnMore />
              <p>
                  At Blacktinum, we unveil the power of exclusive, closely guarded trading strategies that have been honed over several years of meticulous refinement. These unique strategies, crafted with precision and tested rigorously for over six years, have finally been made accessible to the public. This groundbreaking revelation is your gateway to unparalleled success in the world of crypto trading.
              </p>
              <p>
                  We take immense pride in introducing a crypto trading experience that is truly exceptional, built upon a distinct, proven trading strategy that has evolved over six years. This strategy seamlessly harmonizes with artificial intelligence, harnessing the capabilities of automation.
                  The outcome? A trading solution that flawlessly executes trades, even while you&apos;re at rest, ensuring you awaken to substantial gains.
                  
              </p>
              <p>
                  
                  With Blacktinum, you&apos;re not just trading; you&apos;re trading with a strategic edge that&apos;s been kept under wraps until now. Join us, and unlock the unparalleled potential of our exclusive trading strategies today. It&apos;s time to redefine your crypto trading experience with the best-kept secret in the market.
                  
              </p>
         </div>

       
      
      </div>
  )
}

export default AboutUs