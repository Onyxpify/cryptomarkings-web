import React from 'react';
import './testimonies.scss';
import { testiData, testiTypes } from './testimoniesData';
import ScrollX from '../scrollX/ScrollX';
import Image from 'next/image';

const Testimonies = () => {
    const half = Math.round(testiData.length / 2);
    // const lent = testiData.length;
    const row1 = half;
    // const row2 = lent - half;
  return (
      <div id='Testimonies'>
          <div className="line1">
              <h6>TESTIMONIALS</h6>
              <h3>See what our Users are Saying</h3>
          </div>
          <ScrollX className="line2">
              {
                  testiData.filter((n:testiTypes)=> n.id <row1 ).map((each: testiTypes) => {
                      return (
                          <div className='User' key={each.id} >
                              <div className="cell1">
                                  <Image width={'100'} height={'100'}  src={each.icon} alt={each.name} />
                              </div>
                              <div className="cell2">
                                  <p> {each.text} </p>
                                  <h5> {each.name} {each.id} </h5>
                              </div>
                        </div>
                      )
                  }) 
              }
          </ScrollX>
          <ScrollX className="line2">
              {
                  testiData.filter((n:testiTypes)=> n.id >row1 ).map((each: testiTypes) => {
                      return (
                          <div className='User' key={each.id} >
                              <div className="cell1">
                                  <Image width={100} height={100} src={each.icon} alt={each.name} />
                              </div>
                              <div className="cell2">
                                  <p> {each.text} </p>
                                  <h5> {each.name} {each.id} </h5>
                              </div>
                        </div>
                      )
                  }) 
              }
          </ScrollX>
    </div>
  )
}

export default Testimonies