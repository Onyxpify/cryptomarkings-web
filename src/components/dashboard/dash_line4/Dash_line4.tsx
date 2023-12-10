import React from 'react';
import './dashline4.scss';
import { svgs } from '../../svgs';
import LearnMore from '../../learnMore/LearnMore';
import { topRobotList, topTraderList } from './dash4Data';
import { Link } from 'react-router-dom';
import toptraderIcon from '../../../assets/toptraderIcon.svg';

const Dash_line4 = () => {
  return (
      <div id='Dash_Line4'>
          <div className="boxa">
              <div className="cell1">
                  <h3>Top  Traders <span> {svgs.alert_circle} </span> </h3>
                  <div className=""><LearnMore /></div>
              </div>
              <div className="cell2">
                  {
                      topTraderList.map((each: any) => {
                          return (
                              <div key={each.id} className="list">
                                  <div className="unit1">
                                      <div className="img">
                                          <img src={toptraderIcon} alt="trader" />
                                      </div>
                                      <div className="texts">
                                          <h5> {each.name} </h5>
                                          <p> <span> {svgs.networkBar} </span> {each.text} <span> {each.rate} </span> </p>
                                      </div>
                                  </div>
                                  <div className="unit2">
                                      <Link style={{backgroundColor: each.bg}} to={'#'}> {each.status} </Link>
                                  </div>
                              </div>
                          )
                      })
                  }
              </div>
          </div>
          <div className="boxb">
              <div className="cell1">
              <h3>Top  Robots <span> {svgs.alert_circle} </span> </h3>
               <div className=""><LearnMore /></div>
                  
              </div>

              <div className="cell2">
                  {
                      topRobotList.map((each: any) => {
                          return (
                              <div key={each.id} className="list">
                                  <div className="unit1">
                                      <div className="img">
                                          <span > {each.icon} </span>
                                      </div>
                                      <div className="texts">
                                          <h5> {each.name} </h5>
                                          <p> {each.gain} </p>
                                      </div>
                                  </div>
                                  <div className="unit2">
                                      <Link style={{backgroundColor: each.bg}} to={'#'}> {each.status} </Link>
                                  </div>
                              </div>
                          )
                      })
                  }
              </div>
          </div>
    </div>
  )
}

export default Dash_line4