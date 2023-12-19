
import React, { useState,useRef } from "react";
import "./explore.scss";
import {  exploreTab } from "./exploreData";


const Explore = () => {
  let [tab, setTab] = useState(exploreTab);
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
    <div id="Explore">
      <h3 className="h3">Explore</h3>
      <div className="line1">
        {tab.map((each: any) => {
          return (
            <div
              onClick={(e) => handleActive(each.id)}
              key={each.id}
              className={`tab ${each.class}`}
            >
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

export default Explore;
