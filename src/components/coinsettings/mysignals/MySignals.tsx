import React from 'react';
import './mysignals.scss';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const MySignals = () => {
  return (
    <div id='Mysignals' >
            <div className='line'>
              <div className="item"> <AccessAlarmIcon className='icon' /> </div>
              <div className="block">
                <span className="text">TimeFrame</span>
                <span className='time'>30ms</span>
              </div>
            </div>
            <div className='line'>
              <div className="item"> <SignalCellularAltIcon className='icon' /> </div>
              <div className="block">
                <span className="text">RSI</span>
                <span className='time'>Indicator</span>
              </div>
            </div>
            <div className='line'>
              <div className="item"> <SignalCellularAltIcon className='icon' /> </div>
              <div className="block">
                <span className="text">MACD</span>
                <span className='time'>Indicator</span>
              </div>
            </div>
            <div className="startbot">
              <button>Start Robot</button>
            </div>
        </div>
  )
}

export default MySignals