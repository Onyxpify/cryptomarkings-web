import React from 'react';
import './choose.scss';
import { reasons, reasonsTypes } from './chooseData';

const Choose = () => {
  return (
    <div id='Choose'>
          <h3 className='uppercase ' >WHY CHOOSE Blacktinum?</h3>
            <div className="reasons">
              {
                  reasons.map((each: reasonsTypes) => {
                      return (
                            <div key={each.id} className="reason">
                              <div className="img"> {each.icon} </div>
                              <h3> {each.title} </h3>
                                <p> {each.text} </p>
                          </div>
                      )
                  })
              }

            </div>
    </div>
  )
}

export default Choose