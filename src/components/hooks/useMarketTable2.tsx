import classNames from "classnames";
import { useState } from "react";

interface p{
    data: any[],
    render: string,
}

export const useMarketTable2 = ({data,render}:p) => {
   let [Data,setData] = useState(data);

    if(render === 'openned') {
        return (
            <table className="w-full " >
            <tbody>
                  {Data
                    .map((each: any,i:number) => (
                          <tr key={i} className="flex flex-row flex-wrap items-center justify-between p-4 mt-2 mb-4 odd:bg-white rounded-2xl odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 gap-[40px] ">
                      <>
                        <div className="flex flex-col items-start justify-between">
                          <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row1.title}</span>
                          {each.row1.text}
                          <span className="text-transparent">d</span>
                        </div>
                        <div className="flex flex-col items-start justify-between" >
                          <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row2.title}</span>
                          <span className="font-lato font-bold text-[18px] text-active "> {each.row2.price}</span>
                          <span className="font-lato font-normal text-[14px] text-active "> {each.row2.per}</span>
                        </div>
                        <div className="flex flex-col items-start justify-between">
                          <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row3.title}</span>
                          <span className="font-lato font-bold text-[18px] text-mainText " > {each.row3.price}</span>
                           <span className="text-transparent">d</span>
                        </div>
                        <div className="flex flex-col items-start justify-between">
                          <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row4.title}</span>
                          <span className="font-lato font-bold text-[18px] text-mainText "> {each.row4.price}</span>
                           <span className="text-transparent">d</span>
                        </div>
                        <div className="flex flex-col items-start justify-between">
                          <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row5.title}</span>
                          <span className="font-lato font-bold text-[18px] text-mainText "> {each.row5.price}</span>
                           <span className="text-transparent">d</span>
                        </div>
                        <div className="flex flex-col items-start justify-between">
                          <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row6.title}</span>
                          <span className="font-lato font-bold text-[18px] text-mainText "> {each.row6.price}</span>
                           <span className="text-transparent">d</span>
                        </div>
                      </>
                          </tr>
                    ))}
                </tbody>
            </table>
        )

    }else if(render === 'Closed') {
      return (
          <table className="w-full " >
          <tbody>
                {Data
                  .map((each: any,i:number) => (
                        <tr key={i} className="flex flex-row flex-wrap items-center justify-between p-4 mt-2 mb-4 odd:bg-white rounded-2xl odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 gap-[40px] ">
                    <>
                      <div  className="flex flex-col items-start justify-between">
                        <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row1.title}</span>
                        {each.row1.text}
                        <span className="text-transparent">d</span>
                      </div>
                      <div className="flex flex-col items-start justify-between" >
                        <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row2.title}</span>
                        <span className="font-lato font-bold text-[18px] text-active "> {each.row2.price}</span>
                        <span className="text-transparent">d</span>
                      </div>
                      <div className="flex flex-col items-start justify-between">
                        <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row3.title}</span>
                        <span className="font-lato font-bold text-[18px] text-mainText " > {each.row3.price}</span>
                         <span className="text-transparent">d</span>
                      </div>
                      <div className="flex flex-col items-start justify-between">
                        <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row4.title}</span>
                        <span className="font-lato font-bold text-[18px] text-mainText "> {each.row4.price}</span>
                         <span className="text-transparent">d</span>
                      </div>
                      <div className="flex flex-col items-start justify-between">
                        <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row5.title}</span>
                        <span className="font-lato font-bold text-[18px] text-mainText "> {each.row5.price}</span>
                         <span className="text-transparent">d</span>
                      </div>
                      <div className="flex flex-col items-start justify-between">
                        <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row6.title}</span>
                        <span className="font-lato font-bold text-[18px] text-mainText "> {each.row6.price}</span>
                         <span className="text-transparent">d</span>
                      </div>
                      <div className="flex flex-col items-start justify-between">
                        <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row7.title}</span>
                        <span className={classNames("font-lato font-bold uppercase text-[18px]",{
                          'text-active': each.row7.text,
                          'text-error': !each.row7.text,
                        })}> {each.row7.text? 'Buy': 'Sell'}</span>
                         <span className="text-transparent">d</span>
                      </div>
                    </>
                        </tr>
                  ))}
              </tbody>
          </table>
      )

  }
     else if(render === 'gem') {
        return (
            <table className="w-full " >
            <tbody>
                  {Data
                    .map((each: any) => (
                          <tr key={each.id} className="flex flex-row flex-wrap items-center justify-between gap-4 p-4 mt-2 mb-4 odd:bg-white rounded-2xl odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 md:flex-nowrap gap-[40px] ">
                      <>
                        <td className="flex flex-col items-start justify-between flex-none gap-1 ">
                          <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row1.title}</span>
                          {each.row1.text}
                          <span className="text-transparent">d</span>
                        </td>
                        <td className="flex flex-col items-start justify-start flex-none" >
                          <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row2.title}</span>
                          <span className={classNames("font-lato font-bold text-[18px] ",{
                            'text-error': each.id == 2,
                            'text-active': each.id != 2,
                            })} >{each.row2.text}</span>
                          <span className="text-transparent">d</span>
                        </td>
                        <td className="flex flex-col items-start justify-between flex-none">
                          <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row3.title}</span>
                          <span className="font-lato font-bold text-[18px] text-mainText " > {each.row3.price}</span>
                           <span className="text-transparent">d</span>
                        </td>
                        <td className="flex flex-col items-start justify-between flex-none">
                          <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row4.title}</span>
                          <span className="font-lato font-bold text-[18px] text-mainText "> {each.row4.price}</span>
                           <span className="text-transparent">d</span>
                        </td>
                        <td className="flex flex-col items-start justify-between flex-none">
                          <span className="font-lato font-normal text-[18px] text-bodyText ">{each.row5.title}</span>
                          <span className="font-lato font-bold text-[18px] text-mainText "> {each.row5.price}</span>
                           <span className="text-transparent">d</span>
                        </td>
                       
                      </>
                          </tr>
                    ))}
                </tbody>
            </table>
        )
    }
    
    else{
        return(<p>Invalid data or render props</p>)
    }
}

