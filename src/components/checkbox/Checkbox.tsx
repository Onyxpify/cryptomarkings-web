'use client';
import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import './checkbox.scss';

interface p {
    styles?: string,
    setState?: Function,
}

const Checkbox = ({ styles,setState }: p) => {
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
      <button aria-required='true' onClick={(e) => { handleToggle(); e.preventDefault(); }} id={styles} className='Checkbox'>
          {toggle && <FaCheck />}
    </button>
  )
}

export default Checkbox