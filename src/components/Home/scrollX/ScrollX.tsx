import React from 'react';
import './scrollx.scss';

interface props{
    children: any,
    className:string,
}

const ScrollX = ({children,className}:props) => {
  return (
      <div id='ScrollX' className={className}>
          {children}
    </div>
  )
}

export default ScrollX