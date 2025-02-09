import React from "react";
import "./register_3.scss";
import Btn from "@/components/btn/Btn";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { Bounce, ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_ACCOUNT;
interface p {
  setPage: any;
  user: any;
}
const Register_3 = ({ setPage, user }: p) => {

  const notify = (text:any) => toast.info(text, {
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

  function resendEmail(email:any) {
    notify('Please Wait...');
    axios.post(baseUrl+'/GetVerificationCode',{email})
    .then(resp=> {
      if(resp.data.success === true) {
        dismissAll();
        notify('Verification code sent successfully to your email');
        setTimeout(() => {
          dismissAll();
          
        }, 3100);

      }
    })
    .catch(err=>{
      dismissAll();
      notify(err.message);
      setTimeout(() => {
        dismissAll();
        
      }, 3100);
    })
  }
  
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
          verification_code: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          // setPage((prev: any) => prev + 1);
          notify('Please Wait...')
          user.current = { ...user.current, ...values };
          axios
            .post(
              baseUrl+"/Register",
              user.current
            )
            .then((resp) => {
              // console.log(resp.data)
              if (resp.data.success === true) {
                dismissAll();
                notify("Signed up Successfully.");
                setTimeout(() => {
                  dismissAll();
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
              <label htmlFor="verify">Enter 6-digit Verification Code</label>
              {/* <input
          required
          autoComplete="true"
          type="number"
          name="verify"
          id="verify"
          minLength={6}
        /> */}
              <Field id="verification_code" name="verification_code" validate={validateVerify} />
              {errors.verification_code && touched.verification_code && (
                <div className="err">{errors.verification_code}</div>
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
                Didn&apos;t receive code?
                <Link onClick={()=> resendEmail(user.current.email)} href={"#"}>Send again</Link>{" "}
              </p>
            </div>

           
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};

export default React.memo(Register_3);
