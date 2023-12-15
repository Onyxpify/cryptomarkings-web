import React from "react";
import Direct_Line1 from "../direct/direct_line1/Direct_Line1";
import { svgs } from "../../../svgs";
import Direct_Line2 from "../direct/direct_line2/Direct_Line2";
import BinaryTree from "./binaryTree/BinaryTree";
import "./binary.scss";
import LearnMore from "../../../learnMore/LearnMore";
import { referralList } from "./binaryData";
import Binary_Line1 from "./binary_line1/Binary_Line1";

const Binary = () => {
  return (
    <div id="Binary">
      <Direct_Line1
        link="cryptomarkings.com/referral-sample-link"
        title="Binary Reward"
        icon={svgs.binaryBonus}
      />
      <Direct_Line2 />
      <div className="line3">
        <BinaryTree />
        <div className="cell2">
          <Binary_Line1 text="Referral Activity" />
          <div className="bin2">
            {referralList.map((each: any) => {
              return (
                <div key={each.id} className="ref">
                  <div className="cbin1">
                    <div className="img">
                      <img src={each.img} alt="user icon" />
                    </div>
                    <div className="texts">
                      <h4 className="name"> {each.name} </h4>
                      <p>
                        {" "}
                        {each.icon} {each.signups} {each.msg}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="cbin2">
                    <p> {each.time} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Binary;
