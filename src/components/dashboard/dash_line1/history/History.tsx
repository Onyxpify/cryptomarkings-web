import React,{useState,useRef} from 'react'
import DepositeLine1 from '../deposite/depositeLine1/DepositeLine1'
import Dashboard from '../../Dashboard';
import './history.scss';
import { historyTab } from './historyData';
import LearnMore from '../../../learnMore/LearnMore';

const History = () => {
  let [tab, setTab] = useState(historyTab);
  let comp = useRef(tab[0].component);

  function handleActive(id: number) {
    let upd = tab.map((each: any) => {
      if (each.id === id) {
        each.class = "active";
        comp.current= each.component
      } else {
        each.class = "";
      }
      return each;
    });
    setTab(upd);
  }
  return (
    <div id='History'>
       <DepositeLine1 title='History' component={<Dashboard />} />
      <div className="His_inline">
        <div className="historyLine1">
          {tab.map((each: any) => {
            return (
              <div
                onClick={(e) => handleActive(each.id)}
                key={each.id}
                className={`tab ${each.class}`}
              >
                <span className="text"> {each.text} </span>
              </div>
            );
          })}
        </div>
        <div className="history_right">
          <LearnMore text='See more' />
        </div>
       </div>
      <div className="comps">
          {
          comp.current
          }
       </div>
    </div>
    
  )
}

export default History