"use client";
import React, { useRef, useState } from "react";
import OnboardingLayout from "../onboarding/OnboardingLayout";
import Btn from "../btn/Btn";
import Link from "next/link";
import "./register_1.scss";
import Register_2 from "./register_2/Register_2";
import Register_3 from "./register_3/Register_3";
import Register_4 from "./register_4/Register_4";

import { Formik, Form, Field } from "formik";

const Register_1 = () => {
  let [page, setPage] = useState(1);
  let [H3, setH3] = useState("Register");
  let isFormat = useRef(false);

  let user = useRef({});

  function handleNext(a: any) {
    if (page === 1) {
      if (isFormat.current) {
        setPage((prev: any) => prev + 1);
      }
    }
  }

  function validateEmail(value: any) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  function validateFirstname(value: any) {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  }

  function validateLastname(value: any) {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  }

  return (
    <>
      {page <= 3 && (
        <>
          <OnboardingLayout className="Register_1">
            <div className="boxa">
              <Formik
                initialValues={{
                  email: "",
                  last_name: "",
                  first_name: "",
                }}
                onSubmit={(values) => {
                  // same shape as initial values
                  user.current =(values);
                  setPage((prev: any) => prev + 1);
                }}
              >
                {({
                  errors,
                  touched,
                  setFieldValue,
                  handleSubmit,
                  isValid,
                  isSubmitting,
                }) => (
                  <Form autoComplete="true">
                    <h3>{page <= 2 ? H3 : "Verify Email "}</h3>
                    {page === 1 && (
                      <>
                        <fieldset className="fieldSet">
                          <label htmlFor="first_name">First Name</label>
                          <Field
                            id="first_name"
                            name="first_name"
                            validate={validateFirstname}
                          />
                          {errors.first_name && touched.first_name && (
                            <div className="err">{errors.first_name}</div>
                          )}
                        </fieldset>
                        {/* last_name */}
                        <fieldset className="fieldSet">
                          <label htmlFor="last_name">Last Name</label>
                          <Field
                            id="last_name"
                            name="last_name"
                            validate={validateLastname}
                          />
                          {errors.last_name && touched.last_name && (
                            <div className="err">{errors.last_name}</div>
                          )}
                        </fieldset>
                        {/* email */}
                        <fieldset className="fieldSet">
                          <label htmlFor="email">Email Address</label>
                          <Field
                            id="email"
                            name="email"
                            validate={validateEmail}
                          />
                          {errors.email && touched.email && (
                            <div className="err">{errors.email}</div>
                          )}
                        </fieldset>
                        <div onClick={() => handleSubmit()}>
                          <Btn setState={() => {}} text={"Next"} />
                        </div>
                        {!isValid && (
                          <div className="err">
                            Some form fill not yet filled
                          </div>
                        )}
                      </>
                    )}
                  </Form>
                )}
              </Formik>
              {page === 2 && <Register_2 setPage={setPage} user={user} />}
              {page === 3 && <Register_3 setPage={setPage} user={user} />}
              {page <= 2 && (
                <>
                  <div className="ask">
                    <p>
                      Already have an account?{" "}
                      <Link href={"/login"}>Login instead</Link>{" "}
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="img"></div>
          </OnboardingLayout>
        </>
      )}
      {page === 4 && <Register_4 />}
    </>
  );
};

export default Register_1;
