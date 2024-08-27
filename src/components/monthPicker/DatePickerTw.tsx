import classNames from "classnames";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker"; 

interface p{
    width?: any;
    bg?: any;
}

const DatePickerTw = ({width,bg}:p) => { 

const [value, setValue] = useState({ 

startDate: null ,
endDate: null 

}); 

const handleValueChange = (newValue:any) => {
console.log("newValue:", newValue); 
setValue(newValue); 

} 

return (
<Datepicker 
containerClassName={classNames(`w-${width?width:'[113px]'} p-[8px] rounded `)} 
inputClassName={classNames(`w-${width?width:'[113px]'} p-[8px] bg-${bg?bg:'white'} `)}
asSingle={true} 
useRange={false}
// popoverDirection="down" 
value={value} 
onChange={handleValueChange} 
placeholder="12-12-2024"
displayFormat={"DD-MM-YYYY"} 
/> 

);
}; 
export default DatePickerTw;