import React from 'react';
import './applicationstatus.scss';
import { useRecoilState } from "recoil";
import { applyLevel } from "../../../atoms/apply";
import applicationSuccess from '../../../../assets/applicationSuccess.svg';

const ApplicationStatus = () => {
  const [applyStage, setApplyStage] = useRecoilState(applyLevel);
  
  function handleNext() {
    setApplyStage(applyStage + 1);
  }

  return (
    <div id='ApplicationStatus'>
      <h3>
        Strategy Provider
      </h3>

      <div className="app_line1">
        <div className="img">
          <img src={applicationSuccess} alt="success icon" />
        </div>
        <div className="p">
          <p>You have submitted your application successfully.</p>
          <p>Kindly wait for our admin to review your application</p>
        </div>
      </div>

      <div className="pri_line8">
        <button onClick={(e) => handleNext()}>Track</button>
      </div>
      <div className="pri_line9">
        <div className={applyStage > 1 ? "level" : "not-level"}></div>
        <div className={applyStage > 2 ? "level" : "not-level"}></div>
        <div className={applyStage === 3 ? "level" : "not-level"}></div>
        <div className={applyStage === 4 ? "level" : "not-level"}></div>
      </div>
    </div>
  )
}

export default ApplicationStatus