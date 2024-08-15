import { memo, useState } from "react"
import AlertDialogSlide from "../../alertDialogSlide/AlertDialogSlide";

interface p{
    each: any,
    setToggle: any
}
const Profile_comfirm = ({each,setToggle}: p) => {
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setToggle((prev:boolean)=> !prev);
    setOpen(false);
  };
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
      <div className="cell2x flex-wrap mt-4 gap-9 flex items-center justify-between ">
        <div className="">
            <p className="font-lato font-bold leading-5 text-[18px] text-mblack-1 ">Set Copy trade as Percentage or Fixed below</p>
           <div className="mt-4 flex items-center justify-start gap-2 ">
           <fieldset className="flex items-center justify-start gap-[10px]">
                <input className="w-5 h-5 object-cover text-mgray-2 " type="radio" name="percentage" id="percentage" />
                <label className="font-lato font-bold leading-5 text-[18px] text-mgray-2" htmlFor="percentage">Percentage</label>
            </fieldset>
            <fieldset className="flex items-center justify-start gap-[10px]">
                <input className="w-5 border-8 border-mgray-2  h-5 object-cover text-mgray-2 " type="radio" name="percentage" id="fixed" />
                <label className="font-lato font-bold leading-5 text-[18px] text-mgray-2" htmlFor="fixed">Fixed</label>
            </fieldset>
           </div>
        </div>
        <div className="me-9">
            <fieldset className="flex gap-4 flex-col items-start justify-start">
                <label className="font-lato font-bold leading-5 text-[18px] text-mgray-2" htmlFor="amount">Open trade amount in $</label>
                <input className="w-[396px] h-[69px] border-[1px] border-pri rounded-2xl text-base p-7 outline-none font-lato font-bold leading-5 text-[18px] text-mgray-2" type="search" name="amount" id="amount" />
            </fieldset>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center mt-9 ">
      <button onClick={()=> handleClickOpen()} className='w-[172px] bg-pri h-[52px] rounded-2xl py-4 px-8 text-white '>
      Confirm
      </button>
    </div>

    <AlertDialogSlide name={each.name} handleClose={handleClose} open={open} />
  </>
  )
}

export default memo(Profile_comfirm)
