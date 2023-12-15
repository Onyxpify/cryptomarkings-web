import React,{useState} from 'react';
import './traderlist.scss';
import { all, popular, searchFilter, traderTab } from './traderData';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { svgs } from '../svgs';

const TraderList = () => {
  let [tab, setTab] = useState(traderTab);
  let [filt, setFilt] = useState(searchFilter);
  const [tradeType, setTradeType] = React.useState('Spot Manual');

  const handleChange = (event: SelectChangeEvent) => {
    setTradeType(event.target.value as string);
  };
  function handleActive(id:number) {
   let upd= tab.map((each: any) => {
      if (each.id === id) {
        each.class = 'active'
      } else {
        each.class = '';
      }
      return each;
    });
    setTab(upd);
  }
  function handleActiveFilt(id:number) {
   let upd= filt.map((each: any) => {
      if (each.id === id) {
        each.active = 'active'
      } else {
        each.active = '';
      }
      return each;
    });
    setFilt(upd);
  }
  return (
    <div id="TraderList">
      <h3 className='h3'>Trader List</h3>
      <div className="line1">
        {
          tab.map((each: any) => {
            return (
              <div onClick={(e)=> handleActive(each.id)} key={each.id} className={`tab ${each.class}`}>
                <span style={{opacity: each.class === 'active'?'1': '0'}} className="icon"> {each.icon} </span>
                <span className="text"> {each.text} </span>
              </div>
            )
          })
        }
      </div>
      <div className="line2">
        <label htmlFor="trade-type">Trade Type</label>
         <Box sx={{ minWidth: 120 }}>
        <Select
          id="trade-type"
          value={tradeType}
            onChange={handleChange}
            
            IconComponent={ExpandMoreIcon }
        >
          <MenuItem value={'Spot Manual'}>Spot Manual</MenuItem>
          <MenuItem value={'Knight Robot'}>Knight Robot</MenuItem>
          <MenuItem value={'Centurion Robot'}>Centurion Robot</MenuItem>
        </Select>
    </Box>
      </div>
      <div className="line3">
        <fieldset>
          <input type="search" name="search" id="search" placeholder='Search Trader' />
          <label htmlFor="search"> {svgs.search} </label>
        </fieldset>
        <div className="filter">
          {
          filt.map((each: any) => {
            return (
                <span onClick={(e)=> handleActiveFilt(each.id)} key={each.id} className={`filt ${each.active}`} > {each.text} </span>
            )
          })
        }
        </div>
      </div>
      {/* all */}
      <div className="line4">
        <h3>All {svgs.alert_circle} </h3>
        <button>See More {svgs.gt} </button>
      </div>
      <div className="all_boxes">
        {
          all.map((each:any) => {
            return (
              <div key={each.id} className="card">
                <div className="cell1">
                  <div className="unit1">
                    <span className="img"> <img src={each.userIcon} alt="user icon" /> </span>
                    <span className="name"> {each.name} </span>
                  </div>
                  <div className="unit2">
                    <span style={{color: each.star_col?each.star_col: ''}} className="star"> {each.star} </span>
                  </div>
                </div>
                <div className="cell2">
                  <div>
                    <span> {each.avg_icon} </span>
                    <span> {each.avg_text} </span>
                    <span> {each.avg_rate} </span>
                  </div>
                  <div>
                    <span> {each.copier_icon} </span>
                    <span> {each.copier_text} </span>
                    <span> {each.copier_rate} </span>
                  </div>
                  <div>
                    <span> {each.comm_icon} </span>
                    <span> {each.comm_text} </span>
                    <span> {each.comm_rate} </span>
                  </div>
                  <div>
                    <span> {each.total_icon} </span>
                    <span> {each.total_text} </span>
                    <span> {each.total_rate} </span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* popular */}
      <div className="line4">
        <h3>Popular {svgs.alert_circle} </h3>
        <button>See More {svgs.gt} </button>
      </div>
      <div className="all_boxes">
        {
          popular.map((each:any) => {
            return (
              <div key={each.id} className="card">
                <div className="cell1">
                  <div className="unit1">
                    <span className="img"> <img src={each.userIcon} alt="user icon" /> </span>
                    <span className="name"> {each.name} </span>
                  </div>
                  <div className="unit2">
                    <span style={{color: each.star_col?each.star_col: ''}} className="star"> {each.star} </span>
                  </div>
                </div>
                <div className="cell2">
                  <div>
                    <span> {each.avg_icon} </span>
                    <span> {each.avg_text} </span>
                    <span> {each.avg_rate} </span>
                  </div>
                  <div>
                    <span> {each.copier_icon} </span>
                    <span> {each.copier_text} </span>
                    <span> {each.copier_rate} </span>
                  </div>
                  <div>
                    <span> {each.comm_icon} </span>
                    <span> {each.comm_text} </span>
                    <span> {each.comm_rate} </span>
                  </div>
                  <div>
                    <span> {each.total_icon} </span>
                    <span> {each.total_text} </span>
                    <span> {each.total_rate} </span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TraderList