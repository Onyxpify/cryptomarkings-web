import React from 'react';
import './scrollx.scss';

interface props{
    children: any,
  className: string,
  bg?: string,
  color?:string
}

const ScrollX = ({children,className,bg,color}:props) => {
  return (
      <div style={{backgroundColor: bg,color: color}} id='ScrollX' className={className}>
          {children}
    </div>
  )
}

export default ScrollX