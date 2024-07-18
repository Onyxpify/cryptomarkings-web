import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';


interface p{
  show?: any;
  start?: any;
}

const MonthPicker = ({show,start}:p) => {
    const [value, setValue] = useState((start?start: '2020-03'));
  return (
    <LocalizationProvider    dateAdapter={AdapterDayjs}>       
        <DatePicker    
              onChange={(newValue: any) => { setValue(`${newValue.year()}-${newValue.month()}`);}} defaultValue={dayjs(value)} views={[show?show: 'month', 'year']}
              format="YYYY/MM/DD"
              
              openTo="year"
              sx={{width: 'fit-content'}}
               />
    </LocalizationProvider>
  )
}

export default MonthPicker