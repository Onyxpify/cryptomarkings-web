'use client';
import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import './checkbox.scss';

interface p {
    styles?: string,
    setState?: Function,
    data?: any,
}

const Checkbox = ({ styles,setState,data }: p) => {
    let [toggle, setToggle] = useState(false);
    function handleToggle() {
        if (toggle) {
            setToggle(!toggle);
            setState && setState(!toggle);
        }
        else{
            setToggle(!toggle);
            setState && setState(!toggle);
        }
    }
  return (
       <button  onClick={(e) => { handleToggle(); e.preventDefault(); data?.setFieldValue('terms',!toggle); data?.validateTerms(!toggle) }} id={styles} className='Checkbox'>
          {toggle && <FaCheck />}
    </button>
   
  )
}

export default Checkbox