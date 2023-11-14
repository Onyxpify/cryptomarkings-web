import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../header/Header';
import TuneIcon from '@mui/icons-material/Tune';
import './coinsettings.scss';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

import { manualTrades } from '../Market/manual/manualTrades';

import SetTrades from './setTrades/SetTrades';
import SetDiag from './setDiag/SeDiag';
import MySignals from './mysignals/MySignals';
import MyButton from '../button/MyButton';
import CoinWatchList from './watchlist/CoinWatchList';



const CoinSettings = () => {
  let { coin } = useParams();
  let redir = useNavigate();
  let pair = manualTrades.filter(each => each.id === Number(String(coin).split('_')[1]))[0];
  let [add, setAdd] = useState(false);
  
  

  return (
    <div id='CoinSettings'>
      <Header icon={<TuneIcon />} text={`${String(coin).split('_')[0]} Robot`} comp={<div className='box'>
        <div className="line-1">
          <div className="group">
            <div className="icon">
              <SettingsApplicationsIcon className='set' />
             </div>
          <div className="text">setting</div>
          </div>
          <MyButton text='Disabled' styles='disabled' />
        </div>
        <div className="line-2">
          <MyButton text='Indicator' styles='redBorderText' />
        </div>
      </div>} class='Sb' />
     <SetTrades />
      {
        !add && 
        <SetDiag setAdd={setAdd} pair={pair} redir={redir} />
      }
      {
        add && 
        <>
          <MySignals />
          <CoinWatchList />
        </>
      }
    </div>
  )
}

export default CoinSettings