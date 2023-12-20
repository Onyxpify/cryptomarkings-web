import React,{useRef,useState} from 'react';
import './newmarket.scss';
import { marketTab } from './newMarketData';

const NewMarket = () => {
     let [tab, setTab] = useState(marketTab);
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
      <div id='NewMarket'>
          <h3>Spot</h3>
           <div className="newM_line1">
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
      {
        comp.current
        }
    </div>
  )
}

export default NewMarket