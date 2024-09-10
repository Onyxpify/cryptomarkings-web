import React, { useRef } from "react";
import "./register_2.scss";
import Checkbox from "@/components/checkbox/Checkbox";
import CountryCodeInput from "@/components/countryCodeInput/CountryCodeInput";
import CountrySelect from "@/components/countryCodeInput/CountrySelect";
import { Field, Form, Formik } from "formik";
import Btn from "@/components/btn/Btn";
interface p {
  setPage: any;
  user: any;
}
const Register_2 = ({ setPage,user }: p) => {
  let getPassword = useRef("");
  let isTerm = useRef(false);


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
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          phone: "",
          country: "",
          password: "",
          confirmp: "",
          referrer: "Cryptomarkings",
          terms: "",
          "client_id": "VILA_BOT",
          "position": "LEFT",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          setPage((prev: any) => prev + 1);
          user.current = {...user.current,...values};
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
                id="referrer"
                name="referrer"
                validate={validateReferrer}
              />
              {errors.referrer && touched.referrer && (
                <div className="err">{errors.referrer}</div>
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
    </>
  );
};

export default React.memo(Register_2);
