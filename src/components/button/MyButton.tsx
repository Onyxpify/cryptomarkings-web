import React from 'react';
import './mybutton.scss';

interface props {
    styles?: string,
    bg?: string,
    color?: string,
    text?: any,
    action?: Function,
    prop?:any,
}

const MyButton = ({styles,text,action,color,bg,prop}:props) => {
    return (
      <div className={`MyButton ${styles}`}>
          <button  style={{color:color,backgroundColor: bg}} onClick={(e)=> action? action(prop): ()=> {}}  > {text || 'my button'} </button>
            
      </div>
  )
}


export default MyButton