import React,{useState} from 'react';
import './directline3.scss';
interface p{
    data: any,
    min?: number,
}
const Direct_Line3 = ({ data, min }: p) => {
    let [table, setTable] = useState(data);
  return (
      <div id='Direct_Line3'>
          <div className="table">
          {
              table.map((each: any) => {
                  return (
                      <div className={`${each.class}`} key={each.id} >
                          <div className="one">
                              <span className="icon"> {each.cell1.icon? <img src={each.cell1.icon} alt='user icon' />: <></> } </span>
                              <span className="text"> {each.cell1.text} </span>
                          </div>
                          <div className="two">
                              <span className="icon"> {each.cell2.icon? <img src={each.cell2.icon} alt='user icon' />: <></> } </span>
                              <span className="text"> {each.cell2.text} </span>
                          </div>
                          <div className="three">
                              <span className="icon"> {each.cell2.icon? <img src={each.cell2.icon} alt='user icon' />: <></> } </span>
                              <span className="text"> {each.cell2.text} </span>
                          </div>
                          <div className="four">
                              <span className="icon"> {each.cell4.icon? <img src={each.cell4.icon} alt='user icon' />: <></> } </span>
                              <span className="text"> {each.cell4.text} </span>
                          </div>
                      </div>
                  )
              })
          }
              
          </div>
    </div>
  )
}

export default Direct_Line3