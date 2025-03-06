
import React, { useEffect, useRef, useState } from "react";
import "./register_2.scss";
import Checkbox from "@/components/checkbox/Checkbox";
import CountrySelect from "@/components/countryCodeInput/CountrySelect";
import { Field, Form, Formik } from "formik";
import Btn from "@/components/btn/Btn";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSearchParams } from 'next/navigation';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_ACCOUNT;
interface p {
  setPage: any;
  user: any;
}
const Register_2 = ({ setPage, user }: p) => {
  let getPassword = useRef("");
  let isTerm = useRef(false);
   let userName = useRef<undefined | string>();
  const searchParams = useSearchParams();
  let [loading,setLoading] = useState(false);

  const notify =  (text: any) => 
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

    const dismissAll = () =>  toast.dismiss();

  function validatePassword(value: any) {
    let error;
    getPassword.current = value;
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
    return error;
  }
  function validateConfirmp(value: any) {
    let error;
    if (!value) {
      error = "Required";
    } else if (String(value).length <= 8) {
      error = "Must Contain 8 Characters";
    } else if (!/^(?=.*[a-z])/i.test(value)) {
      error = "Must Contain One Lowercase Character";
    } else if (!/^(?=.*[A-Z])/g.test(value)) {
      error = "Must Contain One Uppercase Character";
    } else if (!/^(?=.*[0-9])/g.test(value)) {
      error = "Must Contain One Number Character";
    } else if (!/^(?=.*[!@#\$%\^&\*])/i.test(value)) {
      error = "Must Contain  One Special Case Character";
    } else if (getPassword.current !== value) {
      error = "Password must Match";
    }
    return error;
  }
  function validateCountry(value: any) {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  }

  function validateUsername(value: any) {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  }
  function validateReferrer(value: any) {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  }
  function validateTerms(value: any) {
    // console.log('Terms: ',value)
    let error;

    if (value) {
      isTerm.current = true;
    } else {
      isTerm.current = false;
      error = "Required";
    }
    return error;
  }
  function validatePhone(value: any) {
    let error;
    if (!value) {
      error = "Required";
    } else if (String(value).length <= 4) {
      error = "Must be greater tha 4 digits";
    } else if (isNaN(value)) {
      error = "must be a number";
    }
    return error;
  }
  useEffect(()=> {
  let  data = String(searchParams.get('username'));
  if(data) {
    userName.current = (data);
  }
  setLoading(true);
  
  },[]) // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <>
      {
        loading &&
        <Formik
        initialValues={{
          username: "",
          phone: "",
          country: "",
          password: "",
          confirmp: "",
          referral_code:  userName.current || 'Blackinum', 
          terms: "",
          client_id: "VILA_BOT",
          position: "LEFT",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          user.current = { ...user.current, ...values };
          notify('Please wait...');
          // console.log(user.current)
          axios
            .post(
              baseUrl+"/GetVerificationCode",
              { email: user.current.email }
            )
            .then((resp) => {
              // console.log(resp.data)
              if (resp.data.success === true) {
                dismissAll();
                notify("Verification code sent successfully to your email");
                setTimeout(() => {
                  dismissAll()
                  setPage((prev: any) => prev + 1);
                }, 3100);
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
            <fieldset className="fieldSet">
              <label htmlFor="username">Choose a Username</label>
              <Field
                id="username"
                name="username"
                validate={validateUsername}
              />
              {errors.username && touched.username && (
                <div className="err">{errors.username}</div>
              )}
            </fieldset>
            {/* phonenumber */}
            <CountrySelect data={{ errors, validatePhone, setFieldValue }} />

            <fieldset className="fieldSet">
              <label htmlFor="password">Choose a Password</label>
              <Field
                id="password"
                name="password"
                validate={validatePassword}
              />
              {errors.password && touched.password && (
                <div className="err">{errors.password}</div>
              )}
            </fieldset>
            <fieldset className="fieldSet">
              <label htmlFor="confirmp">Confirm Password</label>
              <Field
                id="confirmp"
                name="confirmp"
                validate={validateConfirmp}
              />
              {errors.confirmp && touched.confirmp && (
                <div className="err">{errors.confirmp}</div>
              )}
            </fieldset>
            <fieldset className="fieldSet">
              <label htmlFor="referrer">Referral Code</label>
              <Field
                id="referral_code"
                name="referral_code"
                validate={validateReferrer}
              />
              {errors.referral_code && touched.referral_code && (
                <div className="err">{errors.referral_code}</div>
              )}
            </fieldset>
            <fieldset id="Line">
              <span>
                <Checkbox
                  data={{ errors, validateTerms, setFieldValue }}
                  styles="remember"
                />
                <label htmlFor="remember">Accept Terms and Conditions</label>
              </span>
            </fieldset>
            {!isTerm.current && <div className="err">Required</div>}

            <div onClick={() => handleSubmit()}>
              <Btn setState={() => {}} text={"Next"} />
            </div>
            {!isValid && (
              <div className="err">Some form fill not yet filled</div>
            )}
          </Form>
        )}
      </Formik>
      }
      <ToastContainer />
      {/* <Alert severity="success">This is a success Alert.</Alert> */}
    </>
  );
};

export default React.memo(Register_2);
