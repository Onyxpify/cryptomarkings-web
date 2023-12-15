import React from 'react'
import Direct_Line1 from '../direct/direct_line1/Direct_Line1'
import { svgs } from '../../../svgs'
import Direct_Line2 from '../direct/direct_line2/Direct_Line2';
import './leadership.scss';
import Binary_Line1 from '../binary/binary_line1/Binary_Line1';
import { currentRank, leadershipRank, leadershipTable, topReferrals } from './leadershipData';
import MyLinearProgressBar from './progressBar/MyLinearProgressBar';
import Direct_Line3 from '../direct/direct_line3/Direct_Line3';

const Leadership = () => {
  return (
    <div id='Leadership'>
      <Direct_Line1 link='cryptomarkings.com/referral-sample-link' title='Leadership Reward' icon={svgs.leadership} />
      <Direct_Line2 />
      <div className="di_line1">
        <div className="di_cell1">
          <div className="unit_1">
            <Binary_Line1 text='Your Current Rank' />
            <div className="un_line1">
              <div className="un_cell1">
                <div className="img">
                  <img src={currentRank.icon} alt="icon" />
                </div>
                <div className="texts">
                  <h5> {currentRank.iconName} </h5>
                  <p>% Reward Percentage <span>{currentRank.reward}</span> </p>
                </div>
              </div>
              <div className="un_cell2">
                <button> Level {currentRank.level} </button>
              </div>
            </div>
            <div className="un_line2">
              <h5>Rank Progresss</h5>
              <MyLinearProgressBar value={50} />
            </div>
          </div>
          <div className="unit_2">
            <Binary_Line1 text='Top Performing Referrals' />
            {
              topReferrals.map((each: any) => {
                return (
                  <div key={each.id} className="un_line1">
              <div className="un_cell1">
                <div className="img">
                  <img src={each.icon} alt="icon" />
                </div>
                <div className="texts">
                  <h5> {each.name} </h5>
                  <p>% Reward Percentage <span>{each.rate}</span> </p>
                </div>
              </div>
              <div className="un_cell2">
                <button> Level {each.level} </button>
              </div>
            </div>
                )
              })
            }
          </div>
        </div>
        <div className="di_cell2">
          <Binary_Line1 text='Leadership Ranks' />
           {
              leadershipRank.map((each: any) => {
                return (
                  <div style={{backgroundColor: each.state==='active'?'#95CEA5':'none'}} key={each.id} className="un_line1">
              <div className="un_cell1">
                <div className="img">
                  <img src={each.icon} alt="icon" />
                </div>
                <div className="texts">
                  <h5> {each.name} </h5>
                  <p>% Reward Percentage <span>{each.rate}</span> </p>
                </div>
              </div>
              <div className="un_cell2">
                <button style={{backgroundColor: each.state==='active'?'#10C10C':''}} > Level {each.level} </button>
              </div>
            </div>
                )
              })
            }
        </div>
      </div>
      <div className="di_line2">
      <Direct_Line3 data={leadershipTable} />

      </div>
    </div>
  )
}

export default Leadership