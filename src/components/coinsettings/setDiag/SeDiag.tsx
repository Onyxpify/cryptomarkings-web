import React, { useReducer, useState } from 'react'
import './setdiag.scss';
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import MyButton from '../../button/MyButton';

interface props {
  setAdd: Function,
  pair: any,
  redir: Function,

}

const label = { inputProps: { 'aria-label': 'controlled' } };


const SetDiag = ({ setAdd, pair,redir }: props) => {
  const [checked, setChecked] = useState(false);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    // console.log(checked);
  };
  function added() {
    setAdd(true);
  }
  function notAdded() {
    setAdd(true);
  }
  function goBack() {
    redir(-1);
  }
  return (
    <div id="SetDiag">
        <div className="line1">
          <span style={{cursor: 'pointer'}} onClick={()=> setAdd(true) } >{<CloseIcon />} <span className='black'>Close</span> </span>
        </div>
        <div className="line2">
          <p>Do you want to add {pair.pair} to your watchlist? </p>
          <div className="group">
            <fieldset>
            <input placeholder='amount' type="number" defaultValue={50} name="amount" id="amount" /> 
            <label htmlFor="amount">USDT Amount to Buy</label>
            </fieldset>
            <div className='fieldset'>
            <Switch {...label}  color='error'  checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}  /> <br />
            <span>Apply Amount to All</span>
            </div>
          </div>
            <div className='btns'>
          <MyButton action={added} text='Add Coin' bg='white' />
          <MyButton action={goBack} text='Cancel' color= 'white' bg='rgb(243, 83, 87)' />
             
        </div>
      </div>
      </div>
  )
}

export default SetDiag