import ExpandMore from "@mui/icons-material/ExpandMore"
import MySelect from "../select/MySelect"
import DatePickerTw from "../monthPicker/DatePickerTw"

const Dollar = () => {
  return (
    <div>
      <div className="">
        <div className="a">
            <div className="flex items-center justify-start gap-1 ">
                <span className="font-lato font-normal text-[18px] leading-4 text-bodyText " >Trade Type</span>
                <MySelect icon={ExpandMore} items={[
                    {
                        value: 'Spot Manual',
                        text: 'Spot Manual'
                    },
                    {
                        value: 'Knight Robot',
                        text: 'Knight Robot'
                    },
                    {
                        value: 'Centurion Robot',
                        text: 'Centurion Robot'
                    },
                ]} />
            </div>
            <h3 className="font-lato font-bold text-[18px] leading-4 text-mainText mt-6 ">Select Date</h3>
            <div className="flex items-center justify-start ">
              <span>From</span>
              <DatePickerTw />
            </div>
        </div>
        <div className="b"></div>
      </div>
    </div>
  )
}

export default Dollar
