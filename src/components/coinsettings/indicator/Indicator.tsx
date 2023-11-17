import React, { useState } from 'react'
import './indicator.scss';
import Close from '../../close/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MyButton from '../../button/MyButton';


interface props{
    setIndicator: any,
}
const Indicator: any = ({ setIndicator }: props) => {
    const [age, setAge] = useState('30ms');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    };
    
    function closeMe() {
        setIndicator(false);
    }
  return (
      <div id='Indicator'>
          <div className="left">
               <Close setHook={closeMe} />
           </div>
          <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset >
            <span id='time-frame'>Time Frame</span>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
                value={age}
                disableUnderline={true}
                variant='standard'
                name='time-frame'
          onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
                id='gold'
        >
           <MenuItem  selected={true}  value={'30ms'}> 30ms</MenuItem>
          <MenuItem value={'40ms'}>40ms</MenuItem>
          <MenuItem value={'50ms'}>50ms</MenuItem>
          <MenuItem value={'60ms'}>60ms</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
          </fieldset>
          <h3>RSI</h3>
          <fieldset>
            <label htmlFor="length">Length</label>
            <input type="number" defaultValue={10} name="length" id="length" />
          </fieldset>
          <fieldset>
            <label htmlFor="source">Source</label>
            <input type="text" defaultValue={'close'} name="source" id="source" />
          </fieldset>
          <h3>MACD</h3>
          <fieldset>
            <label htmlFor="fast-length">Fast Length</label>
            <input type="number" defaultValue={8} name="fast-length" id="fast-length" />
          </fieldset>
          <fieldset>
            <label htmlFor="show-length">Show Length</label>
            <input type="number" defaultValue={21} name="show-length" id="show-length" />
          </fieldset>
          <fieldset>
            <label htmlFor="signal-length">Signal Length</label>
            <input type="number" defaultValue={5} name="signal-length" id="signal-length" />
          </fieldset>
          <fieldset>
            <label htmlFor="macd-source">Source</label>
            <input type="text" defaultValue={'close'} name="macd-source" id="macd-source" />
          </fieldset>
          <fieldset>
            <label htmlFor="oscillator">Oscillator Ma Type</label>
            <input type="text" defaultValue={'EMA'} name="oscillator" id="oscillator" />
          </fieldset>
          <fieldset>
            <label htmlFor="signal-line">Sinal Line Ma Type</label>
            <input type="text" defaultValue={'EMA'} name="signal-line" id="signal-line" />
          </fieldset>
          <div className="save">
            <MyButton text={'SAVE SETTINGS'} styles='redBgWhiteText' />
          </div>
               </form>
      </div>
       <div className="left last">
               <Close setHook={closeMe} />
           </div>
    </div>
  )
}

export default Indicator