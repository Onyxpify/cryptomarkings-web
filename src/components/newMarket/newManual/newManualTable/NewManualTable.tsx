
import React,{useState,useRef} from 'react';
import './newmanualtable.scss';
import Paginate from '../../../pagination/Paginate';
interface p{
    data: any,
    min: number,
    tableHead:any
}
const NewManualTable = ({ data, min,tableHead }: p) => {
    let [table, setTable] = useState(data);
     let [count, setCount] = useState({
    start: 1,
    end: min,
  });
  return (
      <div id='NewManualTable'>
          <div className="table">
              {/* table header */}
              {
              tableHead.map((each: any) => {
                  return (
                      <div className={`${each.class}`} key={each.id} >
                          <div className="one">
                              <span className="icon"> {each.cell1.icon? each.cell1.icon: <></> } </span>
                              <span className="text"> {each.cell1.text} </span>
                          </div>
                          <div className="two">
                              <span className="icon"> {each.cell2.icon? each.cell2.icon: <></> } </span>
                              <span className="text"> {each.cell2.text} </span>
                          </div>
                          <div className="three">
                              <span className="icon"> {each.cell3.icon? each.cell3.icon: <></> } </span>
                              <span className="text"> {each.cell3.text} </span>
                          </div>
                          <div className="four">
                              <span className="icon"> {each.cell4.icon? each.cell4.icon: <></> } </span>
                              <span className="text"> {each.cell4.text} </span>
                          </div>
                      </div>
                  )
              })
          }

              {/* table body */}
          {
              table.filter((item:any)=> item.id >=count.start && item.id <= count.end ).map((each: any) => {
                  return (
                      <div className={`${each.class}`} key={each.id} >
                          <div className="one">
                              <span className="icon"> {each.cell1.icon? each.cell1.icon: <></> } </span>
                              <span className="text"> {each.cell1.text} </span>
                          </div>
                          <div className="two">
                              <span className="icon"> {each.cell2.icon? each.cell2.icon: <></> } </span>
                              <span className="text"> {each.cell2.text} </span>
                          </div>
                          <div className="three">
                              <span className="icon"> {each.cell3.icon? each.cell3.icon: <></> } </span>
                              <span className="text"> {each.cell3.text} </span>
                          </div>
                          <div className="four">
                              <span className="icon"> {each.cell4.icon? each.cell4.icon: <></> } </span>
                              <span className="text"> {each.cell4.text} </span>
                          </div>
                      </div>
                  )
              })
          }
              <Paginate size={data.length} perPage={min} count={count} setCount={setCount} style={{}} />
          </div>
    </div>
  )
}

export default NewManualTable