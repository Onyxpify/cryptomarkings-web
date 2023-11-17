import React, { useReducer, useState } from 'react'
import './setdiag.scss';
import Switch from '@mui/material/Switch';
import MyButton from '../../button/MyButton';
import { useRecoilState } from 'recoil';
import { watchList } from '../../atoms/market';
import Close from '../../close/Close';

interface props {
  setAdd: Function,
  pair: any,
  redir: Function,

}



const label = { inputProps: { 'aria-label': 'controlled' } };


const SetDiag = ({ setAdd, pair, redir }: props) => {
      let [list, setList] = useRecoilState(watchList);

  const [userSettings, setUserSettings] = useState({
    pair: pair.pair,
    icon: pair.name,
    price: 50,
    applyPriceToAll: false,
    text: 'Buy',
    id: nextId(list),
  })

  function nextId(obj: any) {
    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        return 1;
      } else {
        return obj[obj.length - 1].id + 1;
      }
      
    }
    throw new Error('Expected an array')
  }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setChecked(event.target.checked);
    setUserSettings({ ...userSettings, applyPriceToAll: event.target.checked });
  };
  function added() {
    setList([...list, userSettings ]);
    // console.log(nextId(list))
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
        <Close setHook={notAdded} />
        <div className="line2">
          <p>Do you want to add {userSettings.pair} to your watchlist? </p>
          <div className="group">
            <fieldset>
            <input onChange={(e) => setUserSettings({ ...userSettings, price: Number(e.target.value) })} placeholder='amount' type="number" defaultValue={50} name="amount" id="amount" /> 
            <label htmlFor="amount">USDT Amount to Buy</label>
            </fieldset>
            <div className='fieldset'>
            <Switch {...label}  color='error'  checked={userSettings.applyPriceToAll}
              onChange={handleChange}
              name='apply to all'
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