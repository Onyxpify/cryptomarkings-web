import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./paginate.scss";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import eastArrow from '../../assets/ChevronRightOutline.svg'

interface p{
  size:number,
  perPage:number,
  count: any,
  setCount:any,
  style?:any
}
const Paginate = ({ size, perPage, count, setCount, style }:p) => {
  let [num, setNum] = useState([...possiblePags(size, perPage)]);

  function possiblePags(size:number, perPage:number) {
    let pags = [];
    for (let i = 1; i <= Math.ceil(size / perPage); ) {
      if (i === 1) {
        pags.push({ text: i, class: "round active" });
      } else {
        pags.push({ text: i, class: "round" });
      }
      i++;
      if (i === 4) {
        break;
      }
    }
    return pags;
  }

  function handleUserClick(id:number) {
    let upd = num.map((each, i) => {
      if (each.text === id) {
        each.class = "round active";
        //1-8,9-16,17-24,25-32
        setCount({
          start: perPage * each.text - (perPage - 1),
          end: perPage * each.text,
        });
      } else {
        each.class = "round";
      }
      return each;
    });

    setNum(upd);
  }
  function handleNext(dir:string) {
    let maxPag = Math.round(size / perPage);
    if (dir === ">") {
      let upd = num.map((each) => {
        if (num[num.length - 1].text < maxPag) {
          each.text += 1;
          // handleUserClick(each.text += 1);
          return each;
        } else {
          return each;
        }
      });
      setNum(upd);
    }
    if (dir === "<") {
      let upd = num.map((each, i) => {
        if (num[num.length - 1].text === 3) {
          return each;
        } else {
          each.text -= 1;
            // handleUserClick(each.text -= 1);
          return each;
        }
      });
      setNum(upd);
    }
  }
  return (
    <div className="Paginate" style={style}>
      <div className="btns">
        <button
          onClick={(e) => handleNext("<")}
          className="round arrow westArrow"
        >
          {" "}
          <img src={eastArrow} alt="east Arrow" />
        </button>
        {num.map((each) => {
          return (
            <button
              onClick={(e) => {
                handleUserClick(each.text);
              }}
              className={each.class}
              key={each.text}
            >
              {" "}
              {each.text}{" "}
            </button>
          );
        })}
        {Math.round(size / perPage) > 3 && <button className="elipses"> <span>...</span> <span>{Math.round(size / perPage)}</span> </button>}
        <button onClick={(e) => handleNext(">")} className="round arrow">
          {" "}
          <img src={eastArrow} alt="east Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Paginate;
