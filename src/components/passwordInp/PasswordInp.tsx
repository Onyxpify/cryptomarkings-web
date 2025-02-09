'use client';
import React, { useState } from 'react';
import './passwordinp.scss';
import { FaEye,FaEyeSlash } from "react-icons/fa";
interface p {
    styles?: 'string',
    eye?: any,
    eyeSlash?: any,
    label?: string,
    data?:any,
   
}
const PasswordInp = ({ styles, eye,eyeSlash, label,data }: p) => {
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
                      onBlur={(e) => {setFocus('');data?.validatePassword(e.target.value)}}
                      onFocus={(e) => { setFocus('focus-inp') }}
                      onChange={(e)=> {data?.setFieldValue(label || 'password',e.target.value); data?.validatePassword(e.target.value)}}
                      type={toggle}
                      name={label ? label : 'password'} id={label ? label : 'password'} />
                  <span onClick={(e)=> handleToggle()} className="icon">
                      {toggle === "password"? eyeSlash?eyeSlash:<FaEyeSlash />: eye?eye:<FaEye />}
                  </span>
              </div>
          </fieldset>
    </div>
  )
}

export default PasswordInp