import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import classNames from 'classnames';
import React from 'react';

interface p{
    width?: any;
    bg?: any;
}


export default React.memo(function DatePickerMui({width}:p) {
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
})
