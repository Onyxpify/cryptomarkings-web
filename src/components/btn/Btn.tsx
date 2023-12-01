'use client';
import React from 'react';
import './btn.scss';

interface p{
    setState?: Function,
    styles?: string,
    text?: string
}
const Btn = ({ setState, styles, text }: p) => {
    function handleClick() {
        setState && setState()
    }
  return (
      <button onClick={(e)=> handleClick()} id={styles} className='Btn'>
          {text?text:'Log In'}
    </button>
  )
}

export default Btn