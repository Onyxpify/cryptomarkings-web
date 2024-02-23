import React, { useState } from "react";
import "./dash_line3.scss";
import { overviewCoins } from "./dash3Data";
import { useRef } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { svgs } from "../../svgs";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import MonthPicker from "../../monthPicker/MonthPicker";
import LineChart2 from "../../chart/LineChart2";
import { LineData } from "../../chart/LineChartData";
import Line_chart from "../../chart/Line_Chart";


const Dash_line3 = () => {
  let [list, setList] = useState(overviewCoins);
  let labelIcon = useRef(list[0].coin);
  let selectData = useRef(list[0]);
  const [age, setAge] = React.useState(list[0].text);
  let [data, setData] = useState({
    labels: LineData.map((each) => each.month),
    datasets: [
      {
        label: "Pending",
        data: LineData.map((each) => each.pending),
        backgroundColor: ["#FFCC00"],
      },
      {
        label: "Rejected",
        data: LineData.map((each) => each.rejected),
        backgroundColor: ["#EF4444"],
      },
      {
        label: "Approved",
        data: LineData.map((each) => each.approved),
        backgroundColor: ["#3CD856"],
      },
    ],
  });

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  function handleClick(item: any) {
    labelIcon.current = item.coin;
    selectData.current = item;
  }
  
  return (
    <div id="Dash_line3">
      <div className="line1">
        <Box
          sx={{
            minWidth: 120,
            ".MuiOutlinedInput-notchedOutline": { borderStyle: "none" },
          }}
        >
          <label htmlFor="overview"> {labelIcon.current} </label>
          <Select
            labelId="overview"
            id="overview"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {list.map((each: any) => {
              return (
                <MenuItem
                  onClick={(e) => handleClick(each)}
                  key={each.id}
                  value={each.text}
                >
                  {" "}
                  {each.text}{" "}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
      </div>
      <div className="line2">
        <div className="boxa">
          <div className="circle-box">
            {svgs.rounds}
            <div className="cell">
              <h3>${String(selectData.current.balance).split(" ")[0]}</h3>
              <p>Estimated Balance</p>
            </div>
          </div>
          <div className="cell2">
            <div className="pri line">
              <div className="colo"></div>
              <div className="texts">
                <h3>USDT</h3>
                <p> {selectData.current.bal_ratio.usdt} </p>
              </div>
            </div>
            <div className="sec line">
              <div className="colo"></div>
              <div className="texts">
                <h3>BTC</h3>
                <p> {selectData.current.bal_ratio.btc} </p>
              </div>
            </div>
            <div className="ter line">
              <div className="colo"></div>
              <div className="texts">
                <h3>OTHERS</h3>
                <p> {selectData.current.bal_ratio.others} </p>
              </div>
            </div>
          </div>
          <div className="cell3">
            <h3>
              Estimated Balance <FaRegEyeSlash className="eye" />{" "}
            </h3>
            <h2> {selectData.current.balance} </h2>
            <p>
              Today’s PNL{" "}
              <span className="red"> {selectData.current["Today’s PNL"]} </span>{" "}
            </p>
          </div>
        </div>
        <div className="boxb">
          <h3>
            Your {String(selectData.current.text).split("Wallet")[0]} Assets{" "}
            {svgs.alert_circle}{" "}
          </h3>
          {selectData.current.assets.map((each: any) => {
            return (
              <div key={each.id} className="assets">
                <div className="cell1">
                  <div className="icon">{each.icon}</div>
                </div>
                <div className="cell2">
                  <h4> {each.text} </h4>
                  <p> {each.bal} </p>
                </div>
              </div>
            );
          })}
          <p>
            View all 30+ coins <span> {svgs.gt} </span>{" "}
          </p>
        </div>
      </div>
      <div id="Lline3">
        <div className="line1">
          <div className="cell1">
            <h4>Portfolio Value <span> {svgs.alert_circle} </span> </h4>
          </div>
          <div className="cell2">
            <div className="line"></div>
           <Link to="#"> Previous Month </Link>
            <div className="Date"> <MonthPicker /> </div>
           <Link to="#"> {svgs.threeDots} </Link>
          </div>
        </div>
        <div className="line">
          <Line_chart  />
          {/* <LineChart2 /> */}
        </div>
      </div>
    </div>
  );
};

export default Dash_line3;
