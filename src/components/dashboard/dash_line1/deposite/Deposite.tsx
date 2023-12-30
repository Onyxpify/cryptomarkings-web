import React from 'react'
import DepositeLine1 from './depositeLine1/DepositeLine1'
import Dashboard from '../../Dashboard'
import { svgs } from '../../../svgs'
import { Link } from 'react-router-dom';
import './deposite.scss'
import Copy from '../../../rewards/copy/Copy';

const Deposite = () => {
  return (
    <div id='Deposite'>
      <DepositeLine1 title='Deposite' component={<Dashboard />} />
      <div className="withdrawal_line1">
        <div className="coin"> {svgs.usdt} </div>
        <div className="coin_to_withdraw">
          <h3>Deposit Tether USD</h3>
        </div>
       
        <div className="form">
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <label htmlFor="amount">Enter Amount of USDT</label>
              <input type="text" name="amout" id="amout" />
            </fieldset>
            <div className="scan">
              <span> {svgs.scan} </span>
            </div>
            
          </form>
        </div>
        <div className="withdrawal_line2">
          <Copy text='USDT Address' copy='1FfmbHfnpaZjKFvyi1okTjJJusN455paPH' />
              <div className="withraw_warning2">
                <h6>
                  <span> {svgs.alert_circle3} </span>
                  <span>This address only accepts TRC20</span>
                </h6>

            </div>
            <div className="note">
              <p>Make a deposit of 20 USDT to this address. </p>
              <p>NB: Do not resend deposits to old addresses. Kindly generate  a new address for each new payment</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Deposite