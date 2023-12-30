import React from "react";
import DepositeLine1 from "../deposite/depositeLine1/DepositeLine1";
import Dashboard from "../../Dashboard";
import "./withdrawal.scss";
import { svgs } from "../../../svgs";
import { Link } from "react-router-dom";

const Withdrawal = () => {
  return (
    <div id="Withdrawal">
      <DepositeLine1 title="Withdrawal" component={<Dashboard />} />
      <div className="withdrawal_line1">
        <div className="coin"> {svgs.usdt} </div>
        <div className="coin_to_withdraw">
          <h3>Withdraw Tether USD</h3>
        </div>
        <div className="withraw_warning1">
          <h6>
            <span> {svgs.alert_circle3} </span>
            <span>Withdrawal is once every five (5) working days</span>
          </h6>
        </div>
        <div className="form">
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <label htmlFor="amount">Enter Amount of USDT</label>
              <input type="text" name="amout" id="amout" />
            </fieldset>
            <fieldset>
              <label htmlFor="otp">Enter OTP</label>
              <input type="search" name="otp" id="otp" />
              <Link to={"#"}>Click to Get OTP</Link>
            </fieldset>
            <fieldset>
              <label htmlFor="address">Enter TRC20 USDT Address</label>
              <input type="search" name="address" id="address" />
              <div className="withraw_warning2">
                <h6>
                  <span> {svgs.alert_circle3} </span>
                  <span>Ensure USDT wallet address is TRC20</span>
                </h6>
              </div>
            </fieldset>
            <div className="btns">
            <button className="withdraw">Withdraw</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
