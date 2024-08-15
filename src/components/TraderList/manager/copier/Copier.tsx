import { svgs } from '../../../svgs';
import { ToggleButtonTw } from '../../../toggleButton/ToggleButtonTw';
import './copier.scss';
import { useState } from 'react';

const Copier = () => {
  return (
      <div id='Copierx' className='px-[100px]'>
        <h3 className='mt-9 text-pri font-lato font-bold text-[18px] leading-6'>About Strategy</h3>
        <p className='max-w-[1115px] pb-7 mt-2 text-bodyText font-lato font-normal text-[18px] leading-6'>Lorem ipsum dolor sit amet consectetur. Venenatis malesuada proin morbi arcu purus. Ipsum arcu egestas proin et in. Mi quisque integer morbi fringilla fermentum pharetra. Urna viverra orci eu sed sit elementum ipsum. Dictumst suspendisse purus mauris malesuada. Mollis ac id parturient elementum. Auctor ut tincidunt vitae elit lobortis gravida ante. Sed nulla eget.</p>
        <div className="mt-9">
          <h5 className='text-mainText font-lato font-bold text-[18px] leading-6'>You are Copying</h5>
          <div className="">
            <div className="">
              <div className="">
              <p>Jelyluv</p>
              <p>
                <span> {svgs.grayPercent} </span>
                <span>Copy Trade Commission</span>
                <span>5%</span>
              </p>
            </div>
            <div className="">
             <ToggleButtonTw big={{}} small={{}}  />
            </div>
            </div>
            <div className="">
              <div className="">
              <p>Emcode</p>
              <p>
                <span> {svgs.grayPercent} </span>
                <span>Copy Trade Commission</span>
                <span>4%</span>
              </p>
            </div>
            <div className=""></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Copier