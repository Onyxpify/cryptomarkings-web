import React, { ReactComponentElement } from "react";
import { Link } from "react-router-dom";
import "./icontextbtn.scss";
import { useRecoilState } from "recoil";
import { hideSide } from "../atoms/rewards";
import Deposite from "../dashboard/dash_line1/deposite/Deposite";
import { sideComps } from "../atoms/sidebar";

interface p {
  bg?: string;
  icon: any;
  text: string;
  color?: string;
    href: string;
    action?:any
}
const IconTextBtn = ({ bg, icon, text, color, href,action }: p) => {
    let [hide, setHide] = useRecoilState(hideSide);
    let [comp,setComp] = useRecoilState(sideComps);
  return (
    <Link
          onClick={(e) => { action && action() }}
      style={{ backgroundColor: bg, color: color }}
      to={href}
      id="IconTextBtn"
    >
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Link>
  );
};

export default IconTextBtn;
