import React from 'react';
import './testimonies.scss';
import { testiData } from './testimoniesData';
import ScrollX from '../scrollX/ScrollX';

const Testimonies = () => {
    let half = Math.round(testiData.length / 2);
    let lent = testiData.length;
    let row1 = half;
    let row2 = lent - half;
    // console.log(row1, row2);
  return (
      <div id='Testimonies'>
          <div className="line1">
              <h6>Testimonies</h6>
              <h3>See what our Users are Saying</h3>
          </div>
          <ScrollX className="line2">
              {
                  testiData.filter((n:any)=> n.id <row1 ).map((each: any) => {
                      return (
                          <div className='User' key={each.id} >
                              <div className="cell1">
                                  <img src={each.icon} alt={each.name} />
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
                  testiData.filter((n:any)=> n.id >row1 ).map((each: any) => {
                      return (
                          <div className='User' key={each.id} >
                              <div className="cell1">
                                  <img src={each.icon} alt={each.name} />
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