import React from "react";
import "./chats.scss";
import { svgs } from "../../../svgs";
import { chatsData } from "./chatsData";

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
      <div className="line4">
        <div className="cell1">
          <h3>Bullrun 2024</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Metus porttitor nam ut
            consequat amet.
          </p>
          <div className="icons">
            <span>
              {" "}
              {svgs.like} {chatsData.likes}{" "}
            </span>
            <span>
              {" "}
              {svgs.comment} {chatsData.comments}
            </span>
          </div>
        </div>
        <div className="cell2">
          <h3>Bullrun 2024</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Metus porttitor nam ut
            consequat amet.
          </p>
          <div className="icons">
            <span>
              {" "}
              {svgs.like} {chatsData.likes}{" "}
            </span>
            <span>
              {" "}
              {svgs.comment} {chatsData.comments}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
