import React from 'react'
import Image from 'next/image';
import blockvilla from '../../../public/blockvilla.svg';
interface p{
    logo?: any,
}
const Loading = ({logo}:p) => {
  return (
    <div className='flexCenter fixed top-0 left-0 loadHeigth '><Image className='blink' src={logo?logo:blockvilla } alt="animation" width={300} height={300}  /></div>
  )
}

export default Loading