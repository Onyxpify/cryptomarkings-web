import React from 'react';
import './close.scss';
import CloseIcon from '@mui/icons-material/Close';
interface props{
    setHook:any,
}

const Close = ({setHook}:props) => {
  return (
    <div id="close">
          <span className='close-line' onClick={()=> setHook() } >{<CloseIcon />} <span className='black'>Close</span> </span>
        </div>
  )
}

export default Close