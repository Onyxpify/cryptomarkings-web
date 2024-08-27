import { useState } from "react";
import DatePickerMui from "../../monthPicker/DatePickerMui";
import searchIcon from "../../../assets/search-pri.svg";
import FormDialog from "../../dialog/FormDialog";
import { closeTradesData, openTradesData } from "./centurionData";
import classNames from "classnames";
import { useMarketTable2 } from "../../hooks/useMarketTable2";

const Closed = () => {
  let [open, setOpen] = useState(false);
  let [data, setData] = useState(openTradesData);
  return (
    <div>
      <div className="flex flex-row flex-wrap items-center justify-between gap-10 mt-9 ">
        <div className="flex flex-row items-start justify-center gap-1 p-1 bg-yellowPrompt w-fit rounded-2xl ">
          <span className="text-[18] font-lato font-normal text-yellowPrompt1 ">
          Closed Trades{" "}
          </span>
          <span className="text-[18] font-lato font-bold text-yellowPrompt1">
            Total 4
          </span>
        </div>
        <div>
          <h3 className="font-lato font-bold text-[18px] leading-4 text-mainText mt-6 ">
            Select Date
          </h3>
          {/* date search box */}
          <div className="flex flex-wrap items-center justify-start gap-4 ">
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
      </div>
      {/* table */}
      {useMarketTable2({ data: closeTradesData, render: "Closed" })}
      {open && <FormDialog open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Closed;
