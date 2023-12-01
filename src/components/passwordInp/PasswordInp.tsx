'use client';
import React, { useState } from 'react';
import './passwordinp.scss';
import { FaEye,FaEyeSlash } from "react-icons/fa";
interface p {
    styles?: 'string',
    eye?: any,
    eyeSlash?: any,
    label?: string
   
}
const PasswordInp = ({ styles, eye,eyeSlash, label }: p) => {
    let [toggle, setToggle] = useState('password');
    let [focus, setFocus] = useState('');
    function handleToggle() {
        if (toggle === 'password') {
            setToggle('text');
        } else {
            
            setToggle('password');
        }
    }
  return (
      <div id={styles} className='PasswordInp'>
          <fieldset>
              <label htmlFor={label?label:'Password'} > {label ? label : "Password"} </label>
              <div id={focus} className="line">
                  <input
                      required
                      autoComplete='true'
                      onBlur={(e) => setFocus('')}
                      onFocus={(e) => { setFocus('focus-inp') }}
                      type={toggle}
                      name={label ? label : 'Password'} id={label ? label : 'Password'} />
                  <span onClick={(e)=> handleToggle()} className="icon">
                      {toggle === "password"? eyeSlash?eyeSlash:<FaEyeSlash />: eye?eye:<FaEye />}
                  </span>
              </div>
          </fieldset>
    </div>
  )
}

export default PasswordInp