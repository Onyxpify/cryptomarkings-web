import React, { useRef, useState } from "react"
import { tab } from "./revenueData"
import classNames from "classnames";

const Revenue = () => {
  let [Tab,setTab] = useState(tab);
  let currentTab = useRef(Tab[0].component)

  const handleTab = (id:any)=> {
    let upd = Tab.map(each=> {
      if(id === each.id) {
        each.bg= 'bg-sec';
        each.color = 'text-pri'
        currentTab.current = each.component;
      }else{
        each.bg = 'bg-white';
        each.color = 'text-bodyText'
      }
      return each;
    })

    setTab(upd);
  }
  return (
    <div>
      <div className="flex w-[268px] p-1 m-auto rounded-[32px] bg-white h-[46px] items-center gap-4 justify-center mt-20 ">
        {
          Tab.map(each=> (
            <button className={classNames(`${each.bg} ${each.color} rounded-[32px]  w-fit h-[38px] py-2 px-4 `)} onClick={()=> handleTab(each.id)} key={each.id} > {each.text} </button>
          ))
        }
      </div>
      <div className="">
        {currentTab.current}
      </div>
    </div>
  )
}

export default React.memo(Revenue)