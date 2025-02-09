import "./chats.scss";
import { svgs } from "../../../svgs";
import { chatsData } from "./chatsData";
import bullrun from '../../../../assets/chatsbg.svg'
import React from "react";

const Chats = () => {
  return (
    <div id="Chats">
      <div className="line1">
        <span>Chatting as Copier </span>
        <span className="icon">{svgs.gt}</span>
      </div>
      <div className="line2">
        <fieldset>
          <label htmlFor="topic">Enter topic</label>
          <input type="search" name="topic" id="topic" />
        </fieldset>
      </div>
      <div className="line3">
        <span>Crypto</span>
        <span>Profit</span>
        <span>Ethereum</span>
        <span>Binance</span>
      </div>
      <div className="btns">
        <button>New Topic</button>
      </div>
      <div className="line4x mt-[46px] gap-3 flex-wrap flex items-center justify-between ">
        <div className="cell1x relative  w-[428px] min-h-[244px] ">
          <img className="absolute rounded-t-[16px] w-[428px] min-h-[244px]  z-[0] object-cover top-0 left-0" src={bullrun} alt="bullrun" />
         <div className="relative z-10 px-4 pt-[84px] ">
         <h3 className="text-white font-lato font-bold text-[32px] leading-9  ">Bullrun 2024</h3>
          <p className=" mt-2 text-white font-lato font-bold text-[28px] leading-8 ">
            Lorem ipsum dolor sit amet consectetur. Metus porttitor nam ut
            consequat amet.
          </p>
         
         </div>
        </div>
        <div className="cell2x relative w-[600px] min-h-[344px] md:min-h-[244px] ">
        <img className="absolute rounded-t-[16px] w-full min-h-[344px] md:min-h-[244px]  z-[0] object-cover top-0 left-0" src={bullrun} alt="bullrun" />
         <div className="relative  w-full min-h-[344px] md:min-h-[244px]">
         <div className="relative z-10 px-4 pt-[84px] ">
         <h3 className="text-white font-lato font-bold text-[32px] leading-9  ">Bullrun 2024</h3>
          <p className=" w-full mt-2 text-white font-lato font-bold text-[28px] leading-8 ">
            Lorem ipsum dolor sit amet consectetur. Metus porttitor nam ut
            consequat amet.
          </p>
         
         </div>
          <div className="iconsx ps-[17px] mt-3 gap-[14px] w-full flex items-start justify-start ">
            <span className="text-white flex gap-[6px] items-start justify-start">
             <span className="w-5 h-[18px] object-cover "> {svgs.like}</span> <span className="font-lato font-normal text-[18px] leading-5 ">{chatsData.likes}</span>
            </span>
            <span className="text-white flex gap-[6px] items-start justify-start ">
              <span className="w-5 h-[18px] object-cover ">{svgs.comment}</span> <span className="font-lato font-normal text-[18px] leading-5 ">{chatsData.comments}</span>
            </span>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Chats);
