import { useState } from "react"
import { msgData } from "./gemData"
import classNames from "classnames";
import { svgs } from "../svgs";

const Messages = () => {
  let [data,setData] = useState(msgData);
  return (
    <div className="mt-[53px] p-4 bg-white rounded-2xl ">
       {
        data.map(each=> (
          <div key={each.id} className={classNames('flex mt-8 min-h-[111px] items-start justify-start gap-4 ',{
            'flex-row':each.title === 'Admin',
            'flex-row-reverse ':each.title === 'You'
          })} >
           <div className="flex flex-col items-start justify-start gap-4 img shrink-0 "> {each.img} </div>
           <div className="flex-1 ">
             <p className={classNames('p-4 font-poppines font-normal text-[14px] text-bodyText ',{
               'bg-yellowPrompt rounded-t-0 rounded-b-2xl rounded-l-2xl rounded-r-2xl ':each.title === 'Admin',
            'bg-greenPrompt1 rounded-t-2xl rounded-b-2xl rounded-l-2xl rounded-r-0':each.title === 'You'
             })} > {each.msg} </p>
             <div className={classNames("flex flex-row items-center mt-4  gap-2 ",{
                 'flex-row justify-start':each.title === 'Admin',
            'flex-row-reverse text-end':each.title === 'You'
             })} >
              <span className="font-poppins font-semibold text-[14px] text-mainText" > {each.title} </span>
              <span className="font-poppins font-normal text-[14px] text-bodyText"> {each.time} </span>
             </div>
           </div>
          </div>
        ))
       }
       <div className=" min-h-[76px] w-full mx-auto mt-8 mb-4 bg-white rounded-2xl ">
            <form className="flex flex-row items-center justify-center gap-2 p-4 mx-auto rounded-2xl " onSubmit={(e:any)=> e.preventDefault()} >
               <fieldset className="flex flex-row items-center justify-start flex-1 pr-4 border bg-foreground border-1 rounded-2xl ">
                <input className="flex-1 min-h-[76px] mx-auto w-[58vw] md:w-full rounded-2xl py-[26px] border-transparent focus:border-transparent focus:ring-0 px-4 font-poppins bg-transparent font-normal text-2xl text-bodyText " type="text" name="msg" id="msg" placeholder="Message Admin..." />
                <span className="shrink-0 h-[44px] w-[44px] flex flex-col items-center justify-center rounded-[200px] p-[10px] bg-white " > {svgs.attach} </span>
               </fieldset>
               <button className="shrink-0 bg-pri max-w-[96px] text-[14px] font-poppins font-semibold text-white flex items-center justify-center gap-1 p-4 rounded-2xl " type="submit" >Send {svgs.send} </button>
            </form>
       </div>
    </div>
  )
}

export default Messages