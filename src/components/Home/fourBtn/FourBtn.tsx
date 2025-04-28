"use client"
import Link from "next/link";
import React from "react";
import "./fourbtn.scss";
interface props {
  style?: string;
}
const FourBtn = ({ style }: props) => {
  return (
    <div id={style ? style : ""} className="FourBtn">
      <div className="bt">
        <Link className="get-started" href="https://register.blacktinum.io/">
          Get Started
        </Link>
        <button className="watch text-nowrap">
          Watch Video
        </button>
      </div>
      <div className="stores">
        <button className="apple" >
          {" "}
        </button>
        <button className="play" >
          {" "}
        </button>
      </div>
    </div>
  );
};

export default FourBtn;
