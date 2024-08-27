import React, { useRef, useState } from 'react'
import { centurionTabs } from './centurionData'
import classnames from 'classnames'

const NewCenturion = () => {
  const [Tab, setTab] = useState(centurionTabs);
  let activeComp = useRef(Tab[0].component);
  
  const handleClick = (id:any) => { 
     let upd = Tab.map((each:any)=> {
      if(each.id === id) {
        each.state = true;
        activeComp.current = each.component;
            }else{
        each.state = false;
      }
      return each;
     })
     setTab(upd);
   }

  return (
    <div>
      <div className='w-full mt-10 flex flex-row items-center justify-center gap-4 ' >
      {
        Tab.map((each:any)=> (
          <button onClick={(e)=> handleClick(each.id)} key={each.id} className={classnames(' p-[10px] font-lato text-[18px] font-normal rounded-2xl ',{
            'bg-pri text-sec ': each.state,
            'bg-inactive text-white ': false,
          })} > {each.text} </button>  
        ))
      }
      </div>
      <div>
        {activeComp.current}
      </div>
    </div>
  )
}

export default NewCenturion