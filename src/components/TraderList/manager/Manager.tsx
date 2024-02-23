import React, { useRef, useState } from 'react';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { managerTab1, managerTab2, searchFilter, traderTab } from '../traderData';
import './manager.scss';

const Manager = () => {
  const [tradeType, setTradeType] = React.useState("Spot Manual");
  let [filt, setFilt] = useState(searchFilter);
  let [tab1, setTab1] = useState(managerTab1);
  let [tab2, setTab2] = useState(managerTab2);
  let comp = useRef(tab1[0].component);

  function handleActive1(id: number) {
    let upd = tab1.map((each: any) => {
      if (each.id === id) {
        each.class = "active";
        comp.current= each.component
      } else {
        each.class = "";
      }
      return each;
    });
    setTab1(upd);
  }
  function handleActive2(id: number) {
    let upd = tab2.map((each: any) => {
      if (each.id === id) {
        each.class = "active";
        comp.current= each.component
      } else {
        each.class = "";
      }
      return each;
    });
    setTab2(upd);
  }
  const handleChange = (event: SelectChangeEvent) => {
    setTradeType(event.target.value as string);
  };
  return (
    <div id='Manager'>
          <div className="line2">
        <label htmlFor="trade-type">Trade Type</label>
        <Box sx={{ minWidth: 120 }}>
          <Select
            id="trade-type"
            value={tradeType}
            onChange={handleChange}
            IconComponent={ExpandMoreIcon}
          >
            <MenuItem value={"Spot Manual"}>Spot Manual</MenuItem>
            <MenuItem value={"Knight Robot"}>Knight Robot</MenuItem>
            <MenuItem value={"Centurion Robot"}>Centurion Robot</MenuItem>
          </Select>
        </Box>
      </div>
        <div className="line1">
        {tab1.map((each: any) => {
          return (
            <div
              onClick={(e) => handleActive1(each.id)}
              key={each.id}
              className={`tab ${each.class}`}
            >
              <span
                style={{ opacity: each.class === "active" ? "1" : "0" }}
                className="icon"
              >
                {" "}
                {each.icon}{" "}
              </span>
              <span className="text"> {each.text} </span>
            </div>
          );
        })}
      </div>
        <div className="line1">
        {tab2.map((each: any) => {
          return (
            <div
              onClick={(e) => handleActive2(each.id)}
              key={each.id}
              className={`tab ${each.class}`}
            >
              <span
                style={{ opacity: each.class === "active" ? "1" : "0" }}
                className="icon"
              >
                {" "}
                {each.icon}{" "}
              </span>
              <span className="text"> {each.text} </span>
            </div>
          );
        })}
      </div>
      {
        comp.current
        }
    </div>
  )
}

export default Manager