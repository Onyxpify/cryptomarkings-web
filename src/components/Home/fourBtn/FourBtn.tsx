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
        <Link className="get-started text-nowrap" href="https://register.blacktinum.io/">
          Get Started
        </Link>
        <Link target='_blank' href="https://youtube.com/@blacktinum" className="watch text-nowrap inline-block ">
          Watch Video
        </Link>
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
