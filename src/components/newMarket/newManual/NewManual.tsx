import React from 'react'
import { svgs } from '../../svgs';
import './newmanual.scss';
import { newManualTable, newManualTableHeader } from './newManualData';
import NewManualTable from './newManualTable/NewManualTable';

const NewManual = () => {
  return (
      <div id='NewManual'>
          <div className="search">
               <fieldset>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search coin"
            autoComplete='false'
          />
          <label htmlFor="search"> {svgs.search} </label>
        </fieldset>
      </div>
      <div className="newM_table">
        <NewManualTable data={newManualTable} min={8} tableHead={newManualTableHeader} />
      </div>
    </div>
  )
}

export default NewManual