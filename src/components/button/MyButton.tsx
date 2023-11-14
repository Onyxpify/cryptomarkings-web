import React from 'react';
import './mybutton.scss';

interface props {
    styles?: string,
    bg?: string,
    color?: string,
    text?: string,
    action?: Function,
}

const MyButton = ({styles,text,action,color,bg}:props) => {
    return (
      <div className={`MyButton ${styles}`}>
          <button  style={{color:color,backgroundColor: bg}} onClick={(e)=> action? action(e): ()=> {}}  > {text || 'my button'} </button>
            
      </div>
  )
}


export default MyButton