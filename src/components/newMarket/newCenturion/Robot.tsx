import { svgs } from "../../svgs"

import { Formik, Form, Field, } from 'formik';
import { useState } from "react";
import * as Yup from 'yup';

const integerValidation = (value:any) => {
  if (!Number.isInteger(value) || String(value).includes('.')) {
    return false;
  }
  return true;
}

function validateNumber(value:any) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (isNaN(value)) {
    error = 'must be a number';
  }
  return error;
}

const Robot = () => {
  let [type,setType] = useState('');
  return (
    <div>
      <div className="mt-[84px] rounded-2xl p-4 max-w-[471px] min-h-[532px] bg-white mx-auto " >
           <div className="mx-auto w-fit"> {svgs.settingsPri} </div>
           <h3 className="font-lato font-bold text-[28px] text-center mt-4 text-mainText " >Configure Bot Settings</h3>

           <Formik
       initialValues={{
         trades: '',
         amount: '',
       }}
       onSubmit={(values, actions) => {
         // same shape as initial values
         console.log(values,type);
         actions.resetForm();
         
       }}
     >
       {({ errors, touched }) => (
         <Form className="flex flex-col items-center justify-center gap-4 mt-8 " >
            
          {/* trades */}
          <div className="flex-1 mb-4 ">
            <label className=" font-lato text-[18px] font-bold text-bodyText " htmlFor="trades">Maximum number of active trades the Bot should open</label>
          <Field validate={validateNumber} className='flex-1 w-full border border-1 rounded-2xl h-[69px] border-pri focus:border-bodyText divide-black focus:ring-0 ' type='search' label='trades' name="trades" />
           {errors.trades && touched.trades ? (
             <div className="text-[10px] text-error " >{errors.trades}</div>
           ) : null}
          </div>
            {/* amount */}
            <div className="flex-1 mb-4 ">
              <label className=" font-lato text-[18px] font-bold text-bodyText " htmlFor="amount">Amount (USDT) to be bought by the Bot</label>
              <Field validate={validateNumber} className='flex-1 w-full border border-1 rounded-2xl h-[69px] border-pri focus:border-bodyText divide-black focus:ring-0 ' type='search' name="amount" />
           {errors.amount && touched.amount ? (
             <div className="text-[10px] text-error " >{errors.amount}</div>
           ) : null}
            </div>
          
            <div className="flex flex-col items-center justify-center gap-2 ">
            <button className="py-4 px-8 rounded-2xl max-w-[176px] h-[54px] bg-pri text-white font-lato font-normal text-[18px] border border-1 border-pri flex items-center justify-cetner " onClick={()=> setType('save')} type="submit">Save Settings</button>
            <button className="py-4 px-8 rounded-2xl max-w-[176px] h-[54px] bg-transparent text-error font-lato font-normal text-[18px] border border-1 border-error flex items-center justify-cetner text-nowrap " onClick={()=> setType('disable')} type="button">Disable Robot</button>
            </div>
         </Form>
       )}
     </Formik>
      </div>
    </div>
  )
}

export default Robot