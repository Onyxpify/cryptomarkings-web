import React from 'react';
import img from '/blockvilla.svg';
interface p{
    logo?: any,
}
const Loading = ({logo}:p) => {
  return (
    <div className='flexCenter fixed top-0 left-0 loadHeigth '><img className='blink' src={logo?logo:img } alt="animation" width={300} height={300} /></div>
  )
}

export default React.memo(Loading)