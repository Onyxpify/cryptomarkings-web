import React from 'react'
import OnboardingLayout from '../onboarding/OnboardingLayout';
import './securitycheck.scss';

const SecurityCheck = () => {
  return (
      <OnboardingLayout className='SecurityCheck'>
          <div className="left">
              <div className="line1">
                   <h3>Security Check</h3>
              <p>Drag the Slider below to Complete the Puzzle</p>
              </div>
              <div className="img">
                  <div className="_line">
                      <div className="icon1 mdi"></div>
                  <div className="icon2 mdi"></div>
                  </div>
              </div>
              <div className="line2">
                  <span className="icon"></span>
                  <button className="text">Try Again</button>
              </div>
          </div>
          <div className="right"></div>
    </OnboardingLayout>
  )
}

export default SecurityCheck