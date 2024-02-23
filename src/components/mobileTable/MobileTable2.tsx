import React from 'react';
import './mobiletable2.scss';

interface p{
    array: any,
}
const MobileTable2 = ({ array }: p) => {
    
  return (
      <div id='MobileTable2'>
          {array.map((each: any) => {
              if (each.id > 1) {
                  return (
                    <div className={`${each.class}`} key={each.id}>
                              <div className="cell1">
                                  <span className='h3'> {each.cell4.text} </span>
                                  <span className='h6'> {each.cell1.text} </span>
                       </div>
                              <div className="cell2">
                                  <span className={`h3 ${each.cell4.text.includes('Withdrawal')?'red':'green'}`}> {each.cell3.text} </span>
                                  <span className='h6'> {each.cell5.text} </span>
                                  
                       </div>
                      
                    </div>
                  );
                  
              }
        })}
    </div>
  )
}

export default MobileTable2