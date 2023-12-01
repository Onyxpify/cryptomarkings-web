'use client';
import React, { useState } from 'react';
import countryCodes from 'country-codes-list'
import './cci.scss';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CountrySelect from './CountrySelect';
import en from "react-phone-number-input/locale/en";

interface p {
    styles?: 'string',
    eye?: any,
    eyeSlash?: any,
    label?: string
   
}


const CountryCodeInput = ({ styles, eye,eyeSlash, label }: p) => {

    let [focus, setFocus] = useState('');
 
  return (
      <fieldset  id={styles} className='Cci'>
          {/* <label htmlFor="phone">Phone Number</label> */}
      <div id={focus} className="line">
        <span className="callCode">
         <CountrySelect
           
          />
                </span>
        <input
          autoComplete='true'
          required onBlur={(e) => setFocus('')}
          onFocus={(e) => { setFocus('focus-inp') }}
          type={'number'}
          name={'phone'} id={'phone'} />
                  
              </div>
    </fieldset>
  )
}

export default CountryCodeInput