import React from 'react';
import './bonus.scss';
import { bonusCard } from './bonusData';
import { Link } from 'react-router-dom';

const Bonus = () => {
  return (
      <div id='Bonus'>
          {
              bonusCard.map((each: any) => {
                  return (
                      <div id={each.id} className="Card">
                          <div className="img"> {each.icon} </div>
                          <h3> {each.h3} </h3>
                          <div className="p">
                          <p> {each.p1} </p>
                          <p> {each.p2} </p>
                              
                          </div>
                          <div className="btns">
                              <Link className='subscribe' to='#'>Subscribe</Link>
                              <Link className='share' to='#'>Share</Link>
                          </div>
                      </div>
                  )
              })
          }
    </div>
  )
}

export default Bonus