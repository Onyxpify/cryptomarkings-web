import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

const MonthPicker = () => {
    const [value, setValue] = useState(('2020-03'));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>       
        <DatePicker    
              onChange={(newValue: any) => { setValue(`${newValue.year()}-${newValue.month()}`);}} defaultValue={dayjs(value)} views={['month', 'year']} />
    </LocalizationProvider>
  )
}

export default MonthPicker