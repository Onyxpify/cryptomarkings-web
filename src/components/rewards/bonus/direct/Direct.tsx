import React from 'react'
import Direct_Line1 from './direct_line1/Direct_Line1'
import { svgs } from '../../../svgs'
import Direct_Line2 from './direct_line2/Direct_Line2';
import './direct.scss';
import Direct_Line3 from './direct_line3/Direct_Line3';
import { direct3Table } from './direct_line3/direct3Data';

const Direct = () => {

  return (
    <div id='Direct'>
      <Direct_Line1 link='cryptomarkings.com/referral-sample-link' title='Direct Referral Bonus' icon={svgs.directRef} />
      <Direct_Line2 />
      <div className="line3">
         <fieldset>
          <input type="search" name="search" id="search" placeholder='Search Referral' />
          <label htmlFor="search"> {svgs.search} </label>
        </fieldset>
      </div>
      <Direct_Line3 data={direct3Table} />
    </div>
  )
}

export default Direct