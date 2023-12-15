import React from "react";
import "./binarytree.scss";
import { svgs } from "../../../../svgs";
import LearnMore from "../../../../learnMore/LearnMore";
import user1 from "../../../../../assets/user1.svg";
import user2 from "../../../../../assets/user2.svg";
import user3 from "../../../../../assets/user3.svg";
import Binary_Line1 from "../binary_line1/Binary_Line1";
const BinaryTree = () => {
  return (
    <div id="BinaryTree">
      <Binary_Line1 text="Your Binary Tree" />
      <div className="line2">
        <div className="a">
          <div className="img ">
            {" "}
            <img src={user1} alt="user icon" />{" "}
          </div>
        </div>
        <div className="b">
          <div className="boz boza">
            <div className="I"></div>
          </div>
          <div className="boz bozb">
            <div className="I"></div>
          </div>
        </div>
        <div className="c">
          <div className="boz boza">
            <div className="img">
              <img src={user2} alt="user icon" />
            </div>
          </div>
          <div className="boz bozb">
            <div className="img">
              <img src={user3} alt="user icon" />
            </div>
          </div>
        </div>
        <div className="d">
          <div className="one">
            <div className="boz boz1">
              {" "}
              <div className="I"></div>{" "}
            </div>
            <div className="boz boz2">
              {" "}
              <div className="I"></div>{" "}
            </div>
          </div>
          <div className="two">
            <div className="boz boz1">
              {" "}
              <div className="I"></div>
            </div>
            <div className="boz boz2">
              {" "}
              <div className="I"></div>
            </div>
          </div>
        </div>
        <div className="e">
          <div className="one">
            <div className="boz boz1">
              {" "}
              <div className="img">
                <img src={user1} alt="user icon" />
              </div>{" "}
            </div>
            <div className="boz boz2">
              {" "}
              <div className="img">
                <img src={user1} alt="user icon" />
              </div>{" "}
            </div>
          </div>
          <div className="two">
            <div className="boz boz3">
              {" "}
              <div className="img">
                <img src={user2} alt="user icon" />
              </div>
            </div>
            <div className="boz boz4">
              {" "}
              <div className="img">
                <img src={user2} alt="user icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="f">
          <div className="boz boz1">
            {" "}
            <div className="I"></div>{" "}
          </div>
          <div className="boz boz2">
            {" "}
            <div className="I"></div>{" "}
          </div>
          <div className="boz boz3">
            {" "}
            <div className="I"></div>
          </div>
          <div className="boz boz4">
            {" "}
            <div className="I"></div>{" "}
          </div>
        </div>
        <div className="g">
          {/* <div className="img"></div> */}
          <div className="img">
            <img src={user3} alt="user icon" />
          </div>
          <div className="img">
            <img src={user3} alt="user icon" />
          </div>
          <div className="img">
            <img src={user3} alt="user icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinaryTree;
