import React from 'react';
import './table.scss';
import ScrollX from '../scrollX/ScrollX';
import { tableData } from './tableData';

const Table = () => {
  return (
      <ScrollX className='Table'>
          {
              tableData.map((each: any) => {
                  return (
                      <div key={each.id} className={`row ${each.class}`}>
                          <div className='cell1'>
                              {each.col1.icon ? <span className="icon"> {each.col1.icon} </span> : <></>}
                              <span className="text"> {each.col1.text} </span>
                          </div>
                          <div className='cell2'>
                              <span className="icon"> {each.col2.icon ? each.col2.icon : <></>} </span>
                              <span className="text"> {each.col2.text} </span>
                          </div>
                          <div className='cell3'>
                              <span className="icon"> {each.col3.icon ? each.col3.icon : <></>} </span>
                              <span className="text"> {each.col3.text} </span>
                          </div>
                          <div className='cell4'>
                              <span className="icon"> {each.col4.icon ? each.col4.icon : <></>} </span>
                              <span className="text"> {each.col4.text} </span>
                          </div>
                      </div>
                  )
              })
          }
    </ScrollX>
  )
}

export default Table