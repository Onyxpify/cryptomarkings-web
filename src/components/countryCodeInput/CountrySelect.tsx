import React, { useEffect, useRef, useState } from "react";
import countryCodes from "country-codes-list";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./countryselect.scss";
import { Field } from "formik";
interface p{
  data:any,
}
const CountrySelect = ({data}:p) => {
  let [countries, setCountries] = useState(countryCodes.all());
  let [choise, setChoise] = useState("+234");
  let [searchInp, setSearchInp] = useState("");
  let [focus, setFocus] = useState("");
  // let country = useRef({name: 'Nigeria',callingCode: '234'})
  let country = useRef('Nigeria')

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (each:any) => {
    // country.current = {name: each.countryNameEn,callingCode: each.countryCallingCode};
    country.current = each.countryNameEn;;
    data.setFieldValue('country',country.current);

    setAnchorEl(null);
  };
  
  useEffect(()=> {
    data.setFieldValue('country',country.current);
  },[])

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // console.log(data.error.phone)

  return (
    <fieldset id="CountrySelect">
      <label htmlFor="phone">Phone Number</label>
      <div id={focus} className="line">
        <Button id="Code" aria-describedby={id} onClick={handleClick}>
          {choise} <FaChevronDown />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>
            <span className="search-countries">
              <label htmlFor="search">
                <FaSearch />
              </label>
              <input
                value={searchInp}
                onChange={(e) =>
                  setSearchInp(String(e.target.value).toLowerCase())
                }
                type="search"
                name="search"
                id="search"
              />
            </span>
            <span className="Country-list">
              {countries
                .filter((item: any) =>
                  String(String(item.countryNameEn).toLowerCase()).includes(
                    searchInp
                  )
                )
                .map((each: any, i: any) => {
                  return (
                    <span
                      id="c-list"
                      onClick={(e) => {
                        handleClose(each);
                        setChoise(`+${each.countryCallingCode}`);
                      }}
                      key={i}
                    >
                      {each.countryNameEn}
                    </span>
                  );
                })}
            </span>
          </Typography>
        </Popover>
        {/* <input
          type="number"
          name="phone"
          id="phone"
          autoComplete="true"
          onBlur={(e) => setFocus("")}
          onFocus={(e) => {
            setFocus("focus-inp");
          }}
        /> */}
         <Field 
         type="number"
          name="phone"
          id="phone"
          autoComplete="true"
          onBlur={(e:any) => setFocus("")}
          onFocus={(e:any) => {
            setFocus("focus-inp");
          }} validate={data.validatePhone} />
      </div>
      {data.errors.phone &&  (
          <div className="err" >{data.errors.phone}</div>
        )}
    </fieldset>
  );
};

export default CountrySelect;
