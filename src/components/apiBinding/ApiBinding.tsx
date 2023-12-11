import React, { useState } from 'react'
import Dash_line1 from '../dashboard/dash_line1/Dash_line1'
import { svgs } from '../svgs';
import './apibinding.scss';
import Copy from '../rewards/copy/Copy';
import { Link } from 'react-router-dom';

const ApiBinding = () => {
  let [bg, setBg] = useState({ bnd: 'active', byt: 'not-active' })
  function handleBg(text:string) {
    if (text === 'bnd') {
      setBg({ bnd: 'active', byt: 'not-active' });
    } else {
      setBg({ bnd: 'not-active', byt: 'active' })
     }
   }
  return (
    <div id='ApiBinding'>
      <Dash_line1 />
      <div className="line2">
        <div className="cell1">
          <button onClick={(e)=> handleBg('bnd')} style={{backgroundColor:''}} className={`binance ${bg.bnd}`}>
            <span className='icon'> {svgs.bnd} </span>
            <span>Binance</span>
          </button>
          <button onClick={(e)=> handleBg('byt')} className={`bybit ${bg.byt}`}>
            <span className='icon'>  </span>
            <span>Bybit</span>
          </button>
        </div>
      </div>
      <div className="line3">
        <div className="cell1">
          <h3>Status</h3>
          <span>{svgs.link} Bounded </span>
        </div>
        <div className="cell2">
          <Copy text='Cryptomarkings IP Bind' copy='173.312.203.26, 185.193.66.213' />
        </div>
        <div className="cell3">
          <form onSubmit={(e) => e.preventDefault()}>
            <p>{svgs.alert_circle} <span>It is recommended that you  whitelist  our IP Address on your Binance Account</span> </p>
            <div className="inp">
               <fieldset>
              <label htmlFor="key">API Key</label>
              <input type="search" name="key" id="key" />
            </fieldset>
            <fieldset>
              <label htmlFor="secret">API Secret</label>
              <input type="search" name="secret" id="secret" />
              </fieldset>
              <div className="bt">
                <button>
                  Save Changes
                </button>
              </div>
              <div className="texts">
                <p className="back">Want to remove your API Key from Crypto Markings?</p>
                <Link to='#' className="red">Unbind API Key</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ApiBinding