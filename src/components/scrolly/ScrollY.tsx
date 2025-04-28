import React, { ReactNode } from 'react';
import './scrolly.scss';

interface props {
  children: ReactNode;
  className: string;
}

const ScrollY = ({children,className}:props) => {
  return (
      <div id='ScrollY' className={className}>
          {children}
    </div>
  )
}

export default ScrollY