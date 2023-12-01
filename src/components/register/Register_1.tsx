"use client";
import React, { useState } from "react";
import OnboardingLayout from "../onboarding/OnboardingLayout";
import PasswordInp from "../passwordInp/PasswordInp";
import Btn from "../btn/Btn";
import Link from "next/link";
import './register_1.scss';
import Register_2 from "./register_2/Register_2";
import Register_3 from "./register_3/Register_3";
import Register_4 from "./register_4/Register_4";
import ScrollY from "../scrolly/ScrollY";

const Register_1 = () => {
  let [page, setPage] = useState(1);
  let [H3, setH3] = useState('Register');
  function handleSubmit(e: any) {
      e.preventDefault();
      setPage(page+1);
  }
  return (
    <>
      {
        page <= 3 &&
        <>
        <OnboardingLayout className="Register_1">
          <ScrollY className="boxa">
            <form onSubmit={(e) => handleSubmit(e)}>
                      <h3>{page<=2?H3:'Verify Email '}</h3>
                      {
                          page === 1 && 
                          <>
                            <fieldset className="fieldSet">
                <label htmlFor="firstName">First Name</label>
                <input
                  required
                  autoComplete="true"
                  type="text"
                  name="firstName"
                  id="firstName"
                />
              </fieldset>
              <PasswordInp label="Last Name" />
              <fieldset className="fieldSet">
                <label htmlFor="email">Email Address</label>
                <input
                  required
                  autoComplete="true"
                  type="email"
                  name="email"
                  id="email"
                />
              </fieldset>
                          </>
                      }
              
                    {
                        page === 2 &&
                        <Register_2 setPage={setPage} />
                    }
                    {
                        page === 3 &&
                        <Register_3 setPage={setPage} />
                    }
            {
              page <= 2 &&
              <>
                <Btn text={"Next"} />
              <div className="ask">
                <p>
                  Already have an account?{" "}
                  <Link href={"/login"}>Login instead</Link>{" "}
                </p>
              </div>
              </>
              }
            </form>
          </ScrollY>
          <div className="img"></div>
        </OnboardingLayout>
        </>
      }
      {
        page === 4 &&
        <Register_4 />
      }
    </>
  );
};

export default Register_1;
