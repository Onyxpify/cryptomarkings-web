
import React, { useState } from 'react';
import './trackapplication.scss';
import { useRecoilState } from "recoil";
import { applyLevel } from "../../../atoms/apply";
import applicationSuccess from '../../../../assets/applicationSuccess.svg';
import { useNavigate } from 'react-router-dom';
import { sideComps } from '../../../atoms/sidebar';
import Dashboard from '../../../dashboard/Dashboard';
import { sideList } from '../../../dashboard/sidebar/sidebarData';

const TrackApplication = () => {
  const [applyStage, setApplyStage] = useRecoilState(applyLevel);
  let redir = useNavigate();
  let [comps, setComps] = useRecoilState(sideComps);
let [list, setList] = useState(sideList);  
  function handleNext() {
    setApplyStage(applyStage + 1);
  }

   function handleClick(id: any) {
       let upd:any= list.map(each => {
            if (each.id === id) {
                each.active = 'active';
                setComps(each.component);
                
            } else {
                each.active = '';
           }
           return each;
       })
        setList(upd);
    }

  return (
    <div id='TrackApplication'>
      <h3>
        Strategy Provider
      </h3>

      <div className="app_line1">
        <div className="img">
          <img src={applicationSuccess} alt="success icon" />
        </div>
        <div className="p">
          <p>Congratulations your application has been approved!</p>
          
        </div>
      </div>

      <div className="pri_line8">
        <button onClick={(e) => { handleClick(0);  setApplyStage(1)}}>Done</button>
      </div>
      <div className="pri_line9">
        <div className={applyStage > 1 ? "level" : "not-level"}></div>
        <div className={applyStage > 2 ? "level" : "not-level"}></div>
        <div className={applyStage > 3 ? "level" : "not-level"}></div>
        <div className={applyStage === 4 ? "level" : "not-level"}></div>
      </div>
    </div>
  )
}

export default TrackApplication