import React, { useState } from 'react';
import MySelect from '../../../../select/MySelect';
import { adminFeeData } from './adminFeeData';
import './adminFees.scss';
import MobileTable2 from '../../../../mobileTable/MobileTable2';

const AdminFees = () => {
  let [table, setTable] = useState(adminFeeData);
  return (
    <div id='AdminFees'>
      <div className="AdminFees_line1">
        <MySelect />

      </div>
      <div className="table">
        {table.map((each: any) => {
          return (
            <div className={`${each.class}`} key={each.id}>
              <div className="one">
                <span className="icon">
                  {each.cell1.icon ? (
                    <img src={each.cell1.icon} alt="user icon" />
                  ) : (
                    <></>
                  )}
                </span>
                <span className="text"> {each.cell1.text} </span>
              </div>
              <div className="two">
                <span className="icon">
                  {" "}
                  {each.cell2.icon ? (
                    <img src={each.cell2.icon} alt="user icon" />
                  ) : (
                    <></>
                  )}{" "}
                </span>
                <span className="text"> {each.cell2.text} </span>
              </div>
              <div className="three">
                <span className="icon">
                  {" "}
                  {each.cell2.icon ? (
                    <img src={each.cell3.icon} alt="user icon" />
                  ) : (
                    <></>
                  )}{" "}
                </span>
                <span className={`text ${each.cell4.text.includes('Withdrawal')?'red':'green'}`}> {each.cell3.text} </span>
              </div>
              <div className="four">
                <span className="icon">
                  {" "}
                  {each.cell4.icon ? (
                    <img src={each.cell4.icon} alt="user icon" />
                  ) : (
                    <></>
                  )}{" "}
                </span>
                <span className="text"> {each.cell4.text} </span>
              </div>
              <div className="five">
                <span className="icon">
                  {" "}
                  {each.cell5.icon ? (
                    <img src={each.cell5.icon} alt="user icon" />
                  ) : (
                    <></>
                  )}{" "}
                </span>
                <span className="text"> {each.cell5.text} </span>
              </div>
            </div>
          );
        })}
      </div>
      <MobileTable2 array={table} />
    </div>
  )
}

export default AdminFees