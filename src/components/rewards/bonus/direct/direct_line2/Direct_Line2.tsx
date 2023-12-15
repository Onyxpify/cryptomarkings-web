import React from 'react'
import { direct2Card } from './direct2Data';
import './directline2.scss';

const Direct_Line2 = () => {
  return (
      <div id='Direct_line2'>
          {
              direct2Card.map((each: any) => {
                  return (
                      <div key={each.id} className="card">
                          <div className="img"> {each.icon} </div>
                          <h3> {each.price} </h3>
                          <p> {each.text} </p>
                      </div>
                  )
              })
          }
    </div>
  )
}

export default Direct_Line2