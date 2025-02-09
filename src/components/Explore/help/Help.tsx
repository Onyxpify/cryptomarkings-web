import './help.scss';
import supportImg from '../../../assets/supportImg.svg'
import React from 'react';
const Help = () => {
  return (
    <div id='Help'>
      <h3>Welcome to CryptoMarkings Support</h3>
      <div className="help_line1">
        <div className="img">
          <img src={supportImg} alt="support image" />
        </div>
        <p>How may we help you today?</p>
        <div className="btns">
         <button className="support">24/7 Live Support</button>
         <button className="agent">Chat with an Agent</button>
         <button className="service">Self Service</button>
        </div>
      </div>

    </div>
  )
}

export default React.memo(Help)