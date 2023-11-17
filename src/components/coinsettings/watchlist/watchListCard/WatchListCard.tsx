import React from "react";
import MyButton from "../../../button/MyButton";
import CloseIcon from "@mui/icons-material/Close";
import "./watchlistcard.scss";
import { useRecoilState } from "recoil";
import { watchList } from "../../../atoms/market";

const WatchListCard = () => {
  let [list, setList] = useRecoilState(watchList);

  function handleRemove(id:number) {
    let upd = list.filter((each:any) => each.id !== id);
    setList(upd);
  }

  return (
    <>
      {list.length > 0 &&
        list.map((each:any) => {
          return (
            <div key={each.id} id="WatchListCard">
              <div className="line1">
                <div className="icon"> {each.icon} </div>
                <div className="pair"> {each.pair} </div>
                <MyButton
                  action={handleRemove}
                  text={<CloseIcon />}
                  styles="redTextBg"
                  prop={each.id}
                />
              </div>
              <div className="line2">
                <span className="buy"> {each.text} </span>
                <span className="price"> ${each.price} </span>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default WatchListCard;
