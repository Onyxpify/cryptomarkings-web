import { memo, useState } from "react"
import AlertDialogSlideConfirm from "../../alertDialogSlide/AlertDiagSlideConfirm"

interface p {
  each: any,
  setToggle: any
}
const Profile_start = ({ each, setToggle }: p) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handleToggle() {
    setToggle((prev:any)=> !prev)
  }
  return (
    <>
      <div className="bg-white h-[357px] max-w-[84rem] mt-[57px] pt-[86px] ps-[36px] ">

        <div className="cell1x   flex items-center justify-between ">
          <div className="gap-4 flex items-center justify-start">
            <div className="unit1">
              <span className="img">
                <img className=' w-24 h-24 object-cover ' src={each.userIcon} alt="user icon" />{" "}
              </span>
            </div>
            <div className="unit2x gap-4 flex items-start justify-start flex-col ">
              <span className="name text-black font-lato font-bold text-[32px] leading-9 "> {each.name} </span>
              <span
                className="starx text-black font-lato font-normal text-lg leading-5 "
              >
                Welcome to my copy trading page
              </span>
            </div>
          </div>
          <div className="me-[36px]">
            <div className="flex gap-[6px] items-center justify-center  w-[161px] min-h-[32px] px-2 py-1 rounded-2xl bg-sec ">
              <span className='text-pri' > {each.star_dyn} </span>
              <span className='text-pri font-lato font-bold text-lg leading-5'> Top Performer </span>
            </div>
          </div>
        </div>
        <div className="cell2x flex-wrap mt-4 gap-9 flex items-start justify-start ">
          <div className='flex gap-1 items-start justify-start'>
            <span className=' w-5 h-5 object-cover '> {each.avg_icon} </span>
            <span className='text-mgray-1 font-lato font-normal text-lg leading-5'> {each.avg_text} </span>
            <span className='text-mgray-1 font-lato font-bold text-lg leading-5'> {each.avg_rate} </span>
          </div>
          <div className='flex gap-1 items-start justify-start'>
            <span className=' w-5 h-5 object-cover '> {each.copier_icon} </span>
            <span className='text-mgray-1 font-lato font-normal text-lg leading-5'> {each.copier_text} </span>
            <span className='text-mgray-1 font-lato font-bold text-lg leading-5'> {each.copier_rate} </span>
          </div>
          <div className='flex gap-1 items-start justify-start'>
            <span className=' w-5 h-5 object-cover '> {each.comm_icon} </span>
            <span className='text-mgray-1 font-lato font-normal text-lg leading-5'> {each.comm_text} </span>
            <span className='text-mgray-1 font-lato font-bold text-lg leading-5'> {each.comm_rate} </span>
          </div>
          <div className='flex gap-1 items-start justify-start'>
            <span className=' w-5 h-5 object-cover '> {each.total_icon} </span>
            <span className='text-mgray-1 font-lato font-normal text-lg leading-5'> {each.total_text} </span>
            <span className='text-mgray-1 font-lato font-bold text-lg leading-5'> {each.total_rate} </span>
          </div>
          <div className='flex gap-1 items-start justify-start'>
            <span className=' w-5 h-5 object-cover '> {each.watllet_Overview_icon} </span>
            <span className='text-mgray-1 font-lato font-normal text-lg leading-5'> {each.Trader_Balance_text} </span>
            <span className='text-mgray-1 font-lato font-bold text-lg leading-5'> {each.Trader_Balance} </span>
          </div>
          <div className='flex gap-1 items-start justify-start'>
            <span className=' w-5 h-5 object-cover '> {each.watllet_Overview_icon} </span>
            <span className='text-mgray-1 font-lato font-normal text-lg leading-5'> {each.Wallet_overview_text} </span>
            <span className='text-mgray-1 font-lato font-bold text-lg leading-5'> {each.Wallet_Overview} </span>
          </div>
          <div className='flex gap-1 items-start justify-start'>
            <span className=' w-5 h-5 object-cover '> {each.Closed_Trades_icon} </span>
            <span className='text-mgray-1 font-lato font-normal text-lg leading-5'> {each.Closed_Trades_text} </span>
            <span className='text-mgray-1 font-lato font-bold text-lg leading-5'> {each.Closed_Trades} </span>
          </div>
          <div className='flex gap-1 items-start justify-start'>
            <span className=' w-5 h-5 object-cover '> {each.Running_Trades_icon} </span>
            <span className='text-mgray-1 font-lato font-normal text-lg leading-5'> {each.Running_Trades_text} </span>
            <span className='text-mgray-1 font-lato font-bold text-lg leading-5'> {each.Running_Trades} </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-9 ">
        <button onClick={()=> handleClickOpen() } className='w-[172px] bg-pri h-[52px] rounded-2xl py-4 px-8 text-white '>
          Start Copying
        </button>
      </div>
      <AlertDialogSlideConfirm action={handleToggle} handleClose={handleClose} open={open} />
    </>
  )
}

export default memo(Profile_start)
