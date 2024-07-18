import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

{/* <img src={ChevronDown} alt="open" /> */}

// import ChevronDown from "../../assets/chevron-down.svg";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";

interface p {
  items?: any;
  icon?: any;
}

export default function MySelect({ items,icon }: p) {
  const [age, setAge] = React.useState(items?items[0].text: 'Today');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
   
  };


  return (
    <Box sx={{ minWidth: 'fit-content' }}>
      <FormControl  >
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}

        {items ? (
          <>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={`${items[0].value}`}
              onChange={handleChange}
              IconComponent={icon }
             
            
            >

            {items?.map((each: any, index: number) => (
              <MenuItem key={index} value={each.value}>
                {each.text}
              </MenuItem>
            ))}
            </Select>
          </>
        ) : (
          <>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={`${age}`}
              onChange={handleChange}
            >
              <MenuItem value={age}> Today </MenuItem>
              <MenuItem value={'yesterday'}>Yesterday</MenuItem>
              <MenuItem value={'last week'}>Last Week</MenuItem>
            </Select>
          </>
        )}
      </FormControl>
    </Box>
  );
}
