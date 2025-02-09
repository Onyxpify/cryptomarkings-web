import { Link } from "react-router-dom";
import "./icontextbtn.scss";
import React from "react";

interface p {
  bg?: string;
  icon: any;
  text: string;
  color?: string;
    href: string;
    action?:any
}
const IconTextBtn = ({ bg, icon, text, color, href,action }: p) => {
    // let [hide, setHide] = useRecoilState(hideSide);
    // let [comp,setComp] = useRecoilState(sideComps);
  return (
    <Link
          onClick={() => { action && action() }}
      style={{ backgroundColor: bg, color: color }}
      to={href}
      id="IconTextBtn"
    >
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Link>
  );
};

export default React.memo(IconTextBtn);
