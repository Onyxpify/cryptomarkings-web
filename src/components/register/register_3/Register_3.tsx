import React from 'react';
import './register_3.scss';
import Btn from '@/components/btn/Btn';
import Link from 'next/link';
interface p{
   setPage:any,
 }
const Register_3 = ({setPage}:p) => {
  return (
    <>
      <fieldset className="fieldSet">
        <label htmlFor="verify">Enter 6-digit Verification Code</label>
        <input
          required
          autoComplete="true"
          type="number"
          name="verify"
          id="verify"
          minLength={6}
        />
      </fieldset>
      <Btn text={"Comfirm"} />
              <div className="ask">
                <p>
                  Didn’t receive code?
                  <Link href={"#"}>Send again</Link>{" "}
                </p>
              </div>
    </>
  )
}

export default Register_3