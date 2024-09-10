import React from "react";
import "./register_3.scss";
import Btn from "@/components/btn/Btn";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
interface p {
  setPage: any;
  user: any;
}
const Register_3 = ({ setPage, user }: p) => {
  function handleNext() {
    setPage((prev: any) => prev + 1);
  }

  function validateVerify(value: any) {
    let error;
    if (!value) {
      error = "Required";
    } else if (isNaN(value)) {
      error = "must be a number";
    }else if ((String(value).length !== 6)) {
      error = "Must be 6 digits";
    }
    return error;
  }
  return (
    <>
      <Formik
        initialValues={{
          verify: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          // setPage((prev: any) => prev + 1);
          user.current = { ...user.current, ...values };
          console.log(user.current)
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
              <label htmlFor="verify">Enter 6-digit Verification Code</label>
              {/* <input
          required
          autoComplete="true"
          type="number"
          name="verify"
          id="verify"
          minLength={6}
        /> */}
              <Field id="verify" name="verify" validate={validateVerify} />
              {errors.verify && touched.verify && (
                <div className="err">{errors.verify}</div>
              )}
            </fieldset>
            <div onClick={() => handleSubmit()}>
              <Btn setState={() => {}} text={"Confirm"} />
            </div>
            {!isValid && (
              <div className="err">Some form fill not yet filled</div>
            )}
            <div className="ask">
              <p>
                Didn’t receive code?
                <Link href={"#"}>Send again</Link>{" "}
              </p>
            </div>

           
          </Form>
        )}
      </Formik>
    </>
  );
};

export default React.memo(Register_3);
