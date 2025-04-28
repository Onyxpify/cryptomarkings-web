import React from 'react';
import './best.scss';
import { bestRates, bestRaTypes, bestRobots, bestRoTypes } from './bestData';
import ScrollX from '../scrollX/ScrollX';
import Image from 'next/image';

const Best = () => {
  return (
      <div id='Best'>
          <h3>Our Best Performers of the Month</h3>
          <ScrollX className="line1  ">
              {
                  bestRobots.map((robot:bestRoTypes) => {
                      return (
                          <div className='robot relative ' key={robot.id} >
                              <Image width='350' height={'307'} src={robot.img} alt={robot.text} />
                              <p className='absolute bottom-[50px] ' > {robot.text} </p>
                          </div>
                      )
                  })
              }
          </ScrollX>
          <ScrollX className="line2">
              {
                  bestRates.map((rate: bestRaTypes) => {
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
          
    </div>
  )
}

export default Best