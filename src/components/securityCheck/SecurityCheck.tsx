import React, { useEffect, useRef, useState } from "react";
import OnboardingLayout from "../onboarding/OnboardingLayout";
import "./securitycheck.scss";
import DragBox from '../draggable/DragBox'
import { useRouter } from "next/navigation";
import Mymodal from '../modal/Mymodal'
import Image from "next/image";
import logo from '/public/blockvilla.svg';
const reactUrl = process.env.NODE_ENV === 'development'? process.env.NEXT_PUBLIC_REACT_URL_DEV:process.env.NEXT_PUBLIC_REACT_URL


const SecurityCheck = () => {
    const nodeRef = React.useRef(null);
    let [move,setMove] = useState(false);
    let [attempts,setAttempts]= useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(()=> {
        console.clear();
    },[])

    let {push} = useRouter()
    function resetMove(a:boolean) {
        setMove(a)
        setAttempts(prev=> prev+1);
        
    }

    function handleTryAgain() {
        setAttempts(0);
    }

    function handleNext() {
        handleOpen()
        push(reactUrl+'/dashboard')
        
    }
  return (
    <OnboardingLayout className="SecurityCheck">
      <div className="left">
        <div className="line1">
          <h3>Security Check</h3>
          <p>Drag the Slider below to Complete the Puzzle</p>
        </div>
        <div className="img">
          <div style={{opacity: attempts >=1 && !move? 0.1: 0.9}} className="_line">
           <DragBox nodeRef={nodeRef}  resetMove={resetMove} >
            <div  ref={nodeRef} style={{backgroundColor: move?'green':'transparent',opacity: 0.5}} className="icon1 mdi "></div>

           </DragBox>
            <div  className="icon2 mdi"></div>
          </div>
        </div>
        <div className="line2">
          <button onClick={handleNext} disabled={!move}  className={`icon ${move && 'blink'}`}></button>
          <button onClick={handleTryAgain} className={`text ${(attempts ==1 && !move ) && 'blink'}`}>Try Again</button>
        </div>
      </div>
      <div className="right"></div>
      <Mymodal open={open} handleOpen={handleOpen} handleClose={handleClose} msg={<Image className="blink" src={logo} alt="animation" width={300} height={300} />} />
    </OnboardingLayout>
  );
};

export default SecurityCheck;
