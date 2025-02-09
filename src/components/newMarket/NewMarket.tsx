import { marketTab } from "./newMarketData";
import SearchTw from "../search/SearchTw";
import wallet from "../../assets/wallet.svg";
import { useTab } from "../hooks/useTab";
import React, { useState } from "react";

const NewMarket = () => {
  let [data, ] = useState({
    user_price: "$10,000",
    user_profit: "$59.55",
  });
  let { tab, component } = useTab({ data: marketTab, render: "market" });

  return (
    <div className="px-1 md:px-12 ">
      {/* line 1 */}
      {/* a */}
      <div className="flex flex-wrap items-center justify-between gap-10 md:flex-nowrap ">
        <div className="flex flex-col items-center justify-end w-full ">
          {/* boxa */}
          {tab}
          {/* boxb */}
          <div className="mt-9">
            <SearchTw />
          </div>
        </div>
        {/* b */}
        <div className="">
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

      {/* tab show */}
      <div className="">{component}</div>
    </div>
  );
};

export default React.memo(NewMarket);
