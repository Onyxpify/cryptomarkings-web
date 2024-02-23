import React, { useState, useRef, useEffect } from "react";
import "./apply.scss";
import { applyTab } from "./applyData";
import { useRecoilValue } from "recoil";
import { applyLevel } from "../../atoms/apply";

const Apply = () => {
  let [tab, setTab] = useState(applyTab);
  let comp = useRef(tab[0].component);
  let applyStage = useRecoilValue(applyLevel);
  function handleActive() {
    let upd = tab.map((each: any) => {
      if (each.id + 1 === applyStage) {
        each.state = "active";
        comp.current = each.component;
      } else {
        each.state = "";
      }
      return each;
    });
    setTab(upd);
  }
  useEffect(() => {
    handleActive();
  }, [applyStage]);
  return (
    <div id="Apply">
      <div className="ap_cell1">
        {tab.map((each: any) => {
          return (
            <div
              key={each.id}
              className={`tab ${each.state === "active" ? "active" : ""}`}
            >
              <p> {each.text} </p>
            </div>
          );
        })}
      </div>
      <div className="ap_cell2">{comp.current}</div>
    </div>
  );
};

export default Apply;
