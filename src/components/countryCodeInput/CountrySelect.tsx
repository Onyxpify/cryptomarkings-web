import React,{useState} from 'react';
import countryCodes from 'country-codes-list'
import { FaChevronDown,FaSearch } from "react-icons/fa";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ScrollY from '../scrolly/ScrollY';
import './countryselect.scss';

const CountrySelect = () => {
  let [countries, setCountries] = useState(countryCodes.all());
  let [choise, setChoise] = useState('+234');
  let [searchInp, setSearchInp] = useState('')
    let [focus, setFocus] = useState('');
   
 
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <fieldset id='CountrySelect'>
       <label htmlFor="phone">Phone Number</label>
     <div id={focus} className="line">
        <Button id='Code' aria-describedby={id}  onClick={handleClick}>
        {choise} <FaChevronDown />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <div className="search-countries">
             <label htmlFor="search"><FaSearch /></label>
            <input value={searchInp} onChange={(e)=> setSearchInp(String(e.target.value).toLowerCase())} type="search" name="search" id="search" />
           </div>
          <ScrollY className='Country-list'>
            {
              countries.filter((item:any)=>String(String(item.countryNameEn).toLowerCase()).includes(searchInp)).map((each: any,i:any) => {
                return (
                  <div id='c-list' onClick={(e) => { handleClose(); setChoise(`+${each.countryCallingCode}`)}} key={i}>
                    {each.countryNameEn}
                  </div>
                )
              })
              }
          </ScrollY>
        </Typography>
        </Popover>
        <input
          type="number"
          name="phone"
          id="phone"
          autoComplete='true'
          onBlur={(e) => setFocus('')}
          onFocus={(e) => { setFocus('focus-inp') }}
        />
      </div>
      
    </fieldset>
  )
}

export default CountrySelect