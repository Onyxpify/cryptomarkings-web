import React from 'react';
import './onbording.scss';
interface props {
    children: any,
    className?: string
}

const OnboardingLayout = ({children,className}:props) => {
  return (
      <div id='Onboarding' >
          <div className="circle"></div>
          <div className="line1">
              <div className="img"></div>
          </div>
          <div className={`content ${className}`}>
              {children}
          </div>
          <div className="line2">
              <p>© Copyright {new Date().toDateString().split(' ')[3]}, All Rights Reserved CryptoMarkings</p>
          </div>

    </div>
  )
}

export default OnboardingLayout