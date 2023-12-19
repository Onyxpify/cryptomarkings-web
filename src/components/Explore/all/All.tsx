import React from 'react'
import { allData } from '../exploreData'
import LearnMore from '../../learnMore/LearnMore'
import './all.scss';

const All = () => {
  return (
      <div id='All'>
          {
              allData.map((each: any) => {
                  return (
                      <div className="Card">
                          <div className="Card_cell1">
                              <img src={each.icon} alt="card image" />
                          </div>
                          <div className="Card_cell2">
                              <h4> {each.title} </h4>
                              <p> {each.text} </p>
                              <LearnMore text='Read More' />
                          </div>
                      </div>
                  )
              })
          }
    </div>
  )
}

export default All