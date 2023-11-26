import React from 'react';
import './getstarted.scss';
import { steps } from './getstartedData';
import FourBtn from '../fourBtn/FourBtn';

const GetStarted = () => {
  return (
      <div id='GetStarted'>
          <div className="line1">
              <h6>HOW TO GET STARTED</h6>
              <h2>Crypto can be challenging, but CryptoMarkings simplifies it.</h2>
          </div>
          <div className="line2">
              <div className="boxa">
                  <div className="phone"></div>
                  <div className="dots"></div>
              </div>
              <div className="boxb">
                  <h3>HOW TO GET STARTED</h3>
                  <div className="steps">
                      {
                          steps.map((each: any) => {
                              return (
                                  <div className='step' key={each.id}>
                                      <div className="cell1">
                                          <div className="img"> <img src={each.icon} alt="icon" /> </div>
                                          <div className="text">
                                              <p> {each.text} </p>
                                          </div>
                                      </div>
                                      {each.hr ? <div id='hr-box'>
                                      <div className="hr"></div></div> : <></>}
                                  </div>
                              )
                          })
                      }
                  </div>
                  <FourBtn style='get-btns' />
              </div>
          </div>
    </div>
  )
}

export default GetStarted