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
        <a
          className="apple"
          href="https://testflight.apple.com/join/g95phD5P"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the App Store (iOS)"
        >
          {/* App Store button */}
        </a>
        <a
          className="play"
          href="https://drive.google.com/file/d/1aC8cb423jinPSB9P1pWcrceyHbty-H-S/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the Play Store (Android)"
        >
          {/* Play Store button */}
        </a>
      </div>
    </div>
  );
};

export default FourBtn;
