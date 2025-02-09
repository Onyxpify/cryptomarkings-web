import approximately from '../../assets/approximately.svg'
import MyAccordion from '../accordion/Accordion'
import { svgs } from '../svgs'
import { subPackages } from './subscriptionData'

const Subscription = () => {
  return (
    <div className='mt-[42px] mx-[30px]  ' >
     {/* section 1 */}
     <div className="flex flex-wrap gap-3 items-center justify-between flex-row min-h-[98px] w-full  bg-white rounded-2xl p-4 ">
      <div className="flex flex-row items-center justify-center gap-4 ">
        <span className='font-lato font-normal text-center text-[18px] text-mainText  ' >Current Subscription</span>
        <span className='font-lato font-normal flex items-center justify-center text-center text-[18px] text-active w-[106px] h-[38px] rounded-2xl border border-1 border-active  ' >Markings 3</span>
      </div>
      <div className="flex flex-row items-center justify-center gap-16 ">
        <div className="b1">
          <span className='w-[108px] h-[22px] rounded-2xl py-1 px-2 font-lato font-normal text-xs bg-sec '>asset balance</span>
          <div className="flex flex-row items-center justify-center gap-[10px] ">
            <span className='font-lato mt-1 font-bold text-[18px] text-mainText ' >$10,000.00</span>
            <span className='font-lato font-normal text-[12px] text-bodyText flex items-center justify-center flex-row ' ><img src={approximately} alt="icon" /> 0.3023.223 BTC</span>
          </div>
          <span className='font-lato font-normal text-[12px] text-pri' >+0.58%</span>
        </div>
        <div className="   ">
          <button className='flex items-center justify-center flex-row gap-2 bg-pri p-2 rounder max-w-[130.67px] h-[40px] rounded-lg text-sec font-lato font-normal text-[18px] ' >
            {svgs.deposite} Deposit
          </button>
        </div>
      </div>
     </div>
     {/* section 2 */}
     <div className="flex items-center justify-center w-[80vw] text-wrap md:text-wrap md:w-[573px] h-fit md:h-[102px] rounded-2xl p-4 gap-[10px] bg-yellowPrompt mt-6 mx-auto ">
      {svgs.alert_circle4}
      <div className="">
        <h3 className='font-lato font-bold  text-[18px] text-yellowPrompt1 ' >Please make payment of -450 USDT</h3>
        <p className='font-lato font-normal mt-1  text-[18px] text-yellowPrompt1 ' >Amount will be debited from wallet. You can make deposit before
        proceeding in case of insufficient funds.</p>
      </div>
     </div>
     {/* section 3 */}
     <div className="w-full h-[760px] bg-white p-9 mt-[42px] rounded-2xl ">
      <h2 className='flex items-center justify-start text-[28px] font-lato font-bold text-mainText ' >Subscription Packages <span className='w-[28px] h-[28px] flex items-center justify-center ' >{svgs.alert_circle}</span> </h2>
      <MyAccordion data={subPackages} render='subscription' />
     </div>
    </div>
  )
}

export default Subscription