import React from 'react';
import './best.scss';
import { bestRates, bestRobots } from './bestData';
import ScrollX from '../scrollX/ScrollX';

const Best = () => {
  return (
      <div id='Best'>
          <h3>Our Best Performers of the Month</h3>
          <ScrollX className="line1">
              {
                  bestRobots.map((robot: any) => {
                      return (
                          <div className='robot' key={robot.id} >
                              <img src={robot.img} alt={robot.text} />
                              <p> {robot.text} </p>
                          </div>
                      )
                  })
              }
          </ScrollX>
          <ScrollX className="line2">
              {
                  bestRates.map((rate: any) => {
                      return (
                          <div key={rate.id} className='rate'>
                              <h3> {rate.rate} </h3>
                              <div className="box">
                                 <span className='icon'> {rate.icon} </span>
                                  <span className='text'> {rate.text} </span>
                              </div>
                              </div>
                      )
                  })
              }
          </ScrollX>
          {/* <ScrollX>
              amadi
          </ScrollX> */}
    </div>
  )
}

export default Best