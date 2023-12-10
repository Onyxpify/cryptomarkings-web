import React from 'react';
import './scrolly.scss';

interface props{
    children: any,
    className:string,
}

const ScrollY = ({children,className}:props) => {
  return (
      <div id='ScrollY' className={className}>
          {children}
    </div>
  )
}

export default ScrollY