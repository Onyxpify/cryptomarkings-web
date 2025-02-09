'use client';
import React from 'react';
import './btn.scss';
import Linearprogress from '../progress/LinearProgress';

interface p{
    setState?: Function,
    styles?: string,
    text?: string,
    action?:any
    isSubmitting?:any
    isValid?:any
}
const Btn = ({ setState, styles, text,action,isSubmitting,isValid }: p) => {
    function handleClick() {
        setState && setState()
    }
  return (
      <button type='button' onClick={(e)=> handleClick()} id={styles} className='Btn'>
          {isSubmitting && isValid?'Submitting':text?text:'Log In'}
          {isSubmitting && isValid && <Linearprogress />}
    </button>
  )
}

export default Btn