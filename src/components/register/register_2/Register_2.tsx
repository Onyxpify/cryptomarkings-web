import React from 'react';
import './register_2.scss';
import Checkbox from '@/components/checkbox/Checkbox';
import CountryCodeInput from '@/components/countryCodeInput/CountryCodeInput';
import CountrySelect from '@/components/countryCodeInput/CountrySelect';
interface p{
   setPage:any,
 }
const Register_2 = ({ setPage }: p) => {
 
  return (
    <>
      <fieldset className="fieldSet">
        <label htmlFor="username">Choose a Username</label>
        <input
          required
          autoComplete="true"
          type="text"
          name="username"
          id="username"
        />
      </fieldset>
      {/* phonenumber */}
      <CountrySelect />
       <fieldset className="fieldSet">
        <label htmlFor="passwordc">Choose a Password</label>
        <input
          required
          autoComplete="true"
          type="text"
          name="passwordc"
          id="passwordc"
        />
      </fieldset>
       <fieldset className="fieldSet">
        <label htmlFor="passwordcp">Confirm Password</label>
        <input
          required
          autoComplete="true"
          type="text"
          name="passwordcp"
          id="passwordcp"
        />
      </fieldset>
       <fieldset className="fieldSet">
        <label htmlFor="referal">Referral Code</label>
        <input
          required
          autoComplete="true"
          type="text"
          name="referal"
          id="referal"
        />
      </fieldset>
      <fieldset  id="Line">
              <span>
                 <Checkbox  styles="remember" />
                    <label htmlFor="remember">Accept Terms and Conditions</label>
                    </span>
                
            </fieldset>

    </>
  )
}

export default Register_2