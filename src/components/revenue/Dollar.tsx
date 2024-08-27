import ExpandMore from "@mui/icons-material/ExpandMore";
import MySelect from "../select/MySelect";
import FormDialog from "../dialog/FormDialog";
import { useState } from "react";
import searchIcon from "../../assets/search-pri.svg";
import wallet from "../../assets/wallet.svg";
import DatePickerMui from "../monthPicker/DatePickerMui";
import TableTw from "../table/TableTw";
import { DollarTable } from "./dollarTableData";

const Dollar = () => {
  let [open, setOpen] = useState(false);
  let [data, setData] = useState({
    user_price: "$10,000",
    user_profit: "$59.55",
  });
  return (
    <div>
      {/* line 1 */}
      <div className="line1 gap-4 flex flex-wrap md:flex-nowrap items-center justify-between mt-14  ms-8 me-[55px] ">
        {/* boxa */}
        <div className="a">
          <div className="flex items-center justify-start gap-1 ">
            <span className="font-lato font-normal text-[18px] leading-4 text-bodyText ">
              Trade Type
            </span>
            <MySelect
              icon={ExpandMore}
              items={[
                {
                  value: "Spot Manual",
                  text: "Spot Manual",
                },
                {
                  value: "Knight Robot",
                  text: "Knight Robot",
                },
                {
                  value: "Centurion Robot",
                  text: "Centurion Robot",
                },
              ]}
            />
          </div>
          <h3 className="font-lato font-bold text-[18px] leading-4 text-mainText mt-6 ">
            Select Date
          </h3>
          {/* date search box */}
          <div className="flex-wrap flex items-center justify-start gap-4 ">
            <div className="flex items-center justify-start mt-2 ">
              <span className="font-lato font-bold text-mainText leading-5 text-[18px] ">
                From
              </span>
              <DatePickerMui />
            </div>
            <div className="flex items-center justify-start ">
              <span className="font-lato font-bold text-mainText leading-5 text-[18px] ">
                To
              </span>
             
              <DatePickerMui />
            </div>
            <div className="">
              <button
                className="flex items-center justify-center bg-sec gap-2 py-[9px] px-2 rounded-lg "
                onClick={() => setOpen((prev) => !prev)}
              >
                <span>Search</span>
                <img src={searchIcon} alt="search icon" />
              </button>
             
            </div>
          </div>
        </div>
        {/* card box */}
        <div className="b flex-wrap md:flex-nowrap flex items-center justify-start gap-4 ">
          <div className="b1 w-[209px] min-h-[169px] p-4 bg-white rounded-2xl ">
            <img src={wallet} alt="wallet icon" />
            <div className="mt-4">
              <p className="font-bold font-lato leading-12 text-[40px] text-mainText ">
                {" "}
                {data.user_price}{" "}
              </p>
              <p className="font-lato mt-2 font-bold leading-5 text-[18px] text-bodyText ">
                {" "}
                Total Profit{" "}
              </p>
            </div>
          </div>
          <div className="b2 w-[209px] min-h-[169px] p-4 bg-white rounded-2xl">
            <img src={wallet} alt="wallet icon" />
            <div className="mt-4">
              <p className="font-bold font-lato leading-12 text-[40px] text-mainText  ">
                {" "}
                {data.user_profit}{" "}
              </p>
              <p className="font-lato mt-2 font-bold leading-5 text-[18px] text-bodyText ">
                {" "}
                Today’s Profit{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="mt-[37px]">
      <TableTw data={DollarTable} unit='$' />
      </div>


      {
        open && <FormDialog open={open} setOpen={setOpen} />
      }
    </div>
  );
};

export default Dollar;
