"use client";
import React, { useState } from "react";
import "./login.scss";
import PasswordInp from "../passwordInp/PasswordInp";
import Checkbox from "../checkbox/Checkbox";
import Btn from "../btn/Btn";
import Link from "next/link";
import SecurityCheck from "../securityCheck/SecurityCheck";
import OnboardingLayout from "../onboarding/OnboardingLayout";
import { Field, Form, Formik } from "formik";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {toClipboard} from '@/services/toClipboard';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_ACCOUNT;

const Login = () => {
  // sdsidsoidsoE4!
  let [toggle, setToggle] = useState(false);
  let [p, setP] = useState("");

  const notify = (text: any) =>
    toast.info(text, {
      position: "bottom-center",
      autoClose: 600000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const dismissAll = () => toast.dismiss();

  function validateEmail(value: any) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  function validatePassword(value: any) {
    let error = "";
    if (!value) {
      error = "Required";
    } else if (String(value).length <= 8) {
      error = "Must Contain 8 Characters";
    } else if (!/^(?=.*[a-z])/g.test(value)) {
      error = "Must Contain One Lowercase Character";
    } else if (!/^(?=.*[A-Z])/g.test(value)) {
      error = "Must Contain One Uppercase Character";
    } else if (!/^(?=.*[0-9])/i.test(value)) {
      error = "Must Contain One Number Character";
    } else if (!/^(?=.*[!@#\$%\^&\*])/i.test(value)) {
      error = "Must Contain  One Special Case Character";
    }
    // console.log(error)
    setP(error);
    return error;
  }
  return (
    <>
      {!toggle && (
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
                <Formik
                  initialValues={{
                    email: "",
                    client_id: "VILA_BOT",
                    password: "",
                  }}
                  onSubmit={(values) => {
                    // same shape as initial values
                  
                    notify('Please wait...');
                    axios
                      .post(
                        baseUrl + "/SignIn",
                        values
                      )
                      .then(async(resp) => {
                        console.log(resp.data)
                        if (resp.data.success === true) {
                          dismissAll();
                          notify("Login Successfull!.");
                          // console.log(resp.data);
                          toClipboard(resp.data.data)
                          .then(ret=> {
                            setTimeout(() => {
                              setToggle(true);
                              dismissAll();
                            }, 3100);

                          })
                          .catch(err=> {
                            console.log(err)
                          })
                        }else{
                          dismissAll();
                          notify(resp.data.message);
                          
                        }
                      })
                      .catch((err) => {
                        notify(err.message);
                        setTimeout(() => {}, 3100);
                      });
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
                    <Form>
                      <h3>Log in</h3>
                      <fieldset>
                        <label htmlFor="email">Email/Phone Number</label>
                        {/* <input required type="text" name="email" id="email" /> */}
                        <Field
                          id="email"
                          name="email"
                          validate={validateEmail}
                        />
                        {errors.email && touched.email && (
                          <div className="err">{errors.email}</div>
                        )}
                      </fieldset>
                      <fieldset>
                        <PasswordInp
                          label="password"
                          data={{ setFieldValue, validatePassword }}
                        />
                        {true && <div className="err">{p}</div>}
                      </fieldset>
                      <fieldset id="Line">
                        <span>
                          <Checkbox styles="remember" />
                          <label htmlFor="remember">
                            Remember Log in Details?
                          </label>
                        </span>
                      </fieldset>
                      <fieldset className="BtN">
                        <div onClick={() => handleSubmit()} className="">
                          {" "}
                          <Btn />
                        </div>
                        <Link className="_4got" href={"#"}>
                          Forgot Password?
                        </Link>
                        <span className="ask">
                          Don’t have an account?{" "}
                          <Link href="/register">Register here</Link>{" "}
                        </span>
                      </fieldset>
                    </Form>
                  )}
                </Formik>
              </div>
              <div className="box img"></div>
            </div>
          </div>
        </OnboardingLayout>
      )}
      {toggle && <SecurityCheck />}
      <ToastContainer />
    </>
  );
};

export default Login;
