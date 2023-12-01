"use client";
import React, { useState } from "react";
import "./login.scss";
import PasswordInp from "../passwordInp/PasswordInp";
import Checkbox from "../checkbox/Checkbox";
import Btn from "../btn/Btn";
import Link from "next/link";
import SecurityCheck from "../securityCheck/SecurityCheck";
import OnboardingLayout from "../onboarding/OnboardingLayout";

const Login = () => {
  let [toggle, setToggle] = useState(false);
  function handleSubmit(e: any) {
    e.preventDefault();
    setToggle(true);
  }
  return (
    <>
      {
        !toggle &&
           <OnboardingLayout className="Login">
        <div id="Login">
      <div className="line1">
        <p>
          <span className="icon"></span> Ensure you are on{" "}
          <span className="bold">www.cryptomarkings.com</span>{" "}
        </p>
      </div>
      <div className="line2">
        <div className="box form">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h3>Log in</h3>
            <fieldset>
              <label htmlFor="emailPhone">Email/Phone Number</label>
              <input required type="text" name="emailPhone" id="emailPhone" />
            </fieldset>
            <fieldset>
              <PasswordInp />
                
                </fieldset>
                <fieldset  id="Line">
              <span>
                 <Checkbox  styles="remember" />
                    <label htmlFor="remember">Remember Log in Details?</label>
                    </span>
                
            </fieldset>
            <fieldset >
              <Btn />
                <Link className="_4got" href={'#'} >Forgot  Password?</Link>              
              <span className="ask">Don’t have an account? <Link href='/register'>Register here</Link> </span>
            </fieldset>
          </form>
        </div>
        <div className="box img"></div>
      </div>
            </div>
            </OnboardingLayout>
      }
      {
        toggle && <SecurityCheck />
      }
    </>
  );
};

export default Login;
