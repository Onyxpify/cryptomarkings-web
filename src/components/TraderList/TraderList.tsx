import React, { useState,useRef } from "react";
import "./traderlist.scss";
import { all, popular, searchFilter, traderTab } from "./traderData";


const TraderList = () => {
  let [tab, setTab] = useState(traderTab);
  let comp = useRef(tab[0].component);

  function handleActive(id: number) {
    let upd = tab.map((each: any) => {
      if (each.id === id) {
        each.class = "active";
        comp.current= each.component
      } else {
        each.class = "";
      }
      return each;
    });
    setTab(upd);
  }

  return (
    <div id="TraderList">
      <h3 className="h3">Trader List</h3>
      <div className="line1">
        {tab.map((each: any) => {
          return (
            <div
              onClick={(e) => handleActive(each.id)}
              key={each.id}
              className={`tab ${each.class}`}
            >
              <span
                style={{ opacity: each.class === "active" ? "1" : "0" }}
                className="icon"
              >
                {" "}
                {each.icon}{" "}
              </span>
              <span className="text"> {each.text} </span>
            </div>
          );
        })}
      </div>
      {
        comp.current
        }

      
    </div>
  );
};

export default TraderList;
