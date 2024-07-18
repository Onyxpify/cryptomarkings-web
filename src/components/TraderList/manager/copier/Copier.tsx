import { svgs } from '../../../svgs';
import { ToggleButtonTw } from '../../../toggleButton/ToggleButtonTw';
import './copier.scss';
import user from '../../../../assets/user5.svg';
import { useState } from 'react';
import MySelect from '../../../select/MySelect';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Copier = () => {
  return (
      <div id='Copierx' className='px-[100px]'>
        <h3 className='mt-9 text-pri font-lato font-bold text-[18px] leading-6'>About Strategy</h3>
        <p className='max-w-[1115px] pb-7 mt-2 text-bodyText font-lato font-normal text-[18px] leading-6'>Lorem ipsum dolor sit amet consectetur. Venenatis malesuada proin morbi arcu purus. Ipsum arcu egestas proin et in. Mi quisque integer morbi fringilla fermentum pharetra. Urna viverra orci eu sed sit elementum ipsum. Dictumst suspendisse purus mauris malesuada. Mollis ac id parturient elementum. Auctor ut tincidunt vitae elit lobortis gravida ante. Sed nulla eget.</p>
        <div className="mt-9">
          <h5 className='text-mainText font-lato font-bold text-[18px] leading-6'>You are Copying</h5>
          <div className="linex mt-5 flex gap-7 md:gap-0 flex-col md:flex-row items-start md:items-center justify-between  ">
            <div className="a flex  gap-2 flex-col md:flex-row items-center justify-start">
              <div className="img">
              <img src={user} alt="user" />
              </div>
              <div className="info">
              <p className='font-lato font-bold leading-5 text-[18px] text-mainText'>Jelyluv</p>
              <p className='flex gap-1 text-nowrap items-center justify-start font-lato font-normal leading-5 text-[18px] text-bodyText'>
                <span> {svgs.grayPercent} </span>
                <span>Copy Trade Commission</span>
                <span>5%</span>
              </p>
              </div>
            </div>
            <div className="b flex items-start justify-start gap-1">
              <div className="label font-lato font-bold leading-5 text-xs text-mainText">Enable Copy</div>
            <div className="">
             <ToggleButtonTw big={{}} small={{}}  />
            </div>
            </div>
            
          </div>
            {/*  */}
          <div className="linex mt-5 flex gap-7 md:gap-0 flex-col md:flex-row items-start md:items-center justify-between ">
            <div className="a flex gap-2 flex-col md:flex-row items-center justify-start">
              <div className="img">
              <img src={user} alt="user" />
              </div>
              <div className="info">
              <p className='font-lato font-bold leading-5 text-[18px] text-mainText'>Emcode</p>
              <p className='flex gap-1 items-center justify-start font-lato font-normal leading-5 text-[18px] text-bodyText'>
                <span> {svgs.grayPercent} </span>
                <span>Copy Trade Commission</span>
                <span>4%</span>
              </p>
              </div>
            </div>
            <div className="b flex items-start justify-start gap-1">
              <div className="label font-lato font-bold leading-5 text-xs text-mainText">Enable Copy</div>
            <div className="">
             <ToggleButtonTw big={{}} small={{}}  />
            </div>
            </div>
            
          </div>
            {/*  */}
            <div className="flex flex-col md:flex-row  items-start md:items-center justify-between mt-[41px] ">
              <p className='font-lato text-mainText font-bold  text-[18px] leading-5'>Copier Amount Settings</p>
            
             <MySelect 
              icon={ExpandMore} 
              items={[
                {
                  text: 'Percentage', value: 'Percentage'
                },
                {
                  text: 'Price', value: 'Price'
                },
              ]}
               />
            </div>
              {/*  */}
              <div className="mt-9 flex items-center justify-center ">
                <button className='font-lato text-white bg-pri text-center leading-5 rounded py-4 px-8  '>Save Changes</button>
              </div>

        </div>
    </div>
  )
}

export default Copier