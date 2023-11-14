import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './search.scss';

const Search = (props:any) => {
  return (
   <div className="search">
              <fieldset>
                  <label htmlFor="search">
                      <SearchIcon />
                  </label>
                <input onKeyUp={(e)=> props.handleSearch(e)} value={props.search} onChange={(e)=> props.setSearch(e.target.value)} placeholder='Search Coin' type="search" name="search" id="search" />
               </fieldset>
      </div>
  )
}

export default Search