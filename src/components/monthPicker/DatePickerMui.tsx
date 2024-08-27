import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import classNames from 'classnames';

interface p{
    width?: any;
    bg?: any;
}


export default function DatePickerMui({width,bg}:p) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'MobileDatePicker',
          'DesktopDatePicker',
          'StaticDatePicker',
        ]}
        sx={{width: '113px', height: 'unset',margin: 'unset',padding: 'unset',outline: 'none', border: 'none'}}
      >
       
          <MobileDatePicker className={classNames(`w-${width?width:'[113px]'} p-[8px] rounded border-none outline-none `)} defaultValue={dayjs('2024-07-17')} />
        
      </DemoContainer>
    </LocalizationProvider>
  );
}
