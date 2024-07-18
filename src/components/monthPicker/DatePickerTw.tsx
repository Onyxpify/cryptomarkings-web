import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker"; 

const DatePickerTw = () => { 

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
containerClassName="w-fit" 
inputClassName='w-fit bg-transparent'
asSingle={true} 
useRange={false}
popoverDirection="down" 
value={value} 
onChange={handleValueChange} 
placeholder="12-12-2024"
displayFormat={"DD-MM-YYYY"} 
/> 

);
}; 
export default DatePickerTw;