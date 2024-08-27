import classNames from "classnames";
import { useRef, useState } from "react";

interface p {
  data: any[];
  render: string;
}


export const useTab = ({ data, render }: p):any => {
  let [Data, setData] = useState(data);
  let currentTab = useRef(Data[0].component);

  const handleTab = (id: any) => {
    let upd = Data.map((each: any) => {
      if (id === each.id) {
        each.bg = "bg-sec";
        each.color = "text-pri";
        currentTab.current = each.component;
      } else {
        each.bg = "bg-white";
        each.color = "text-bodyText";
      }
      return each;
    });

    setData(upd);
  };

  if (render === "market") {
    return {
        tab: 
            <div className="flex min-w-[268px] p-1 m-auto flex-wrap md:flex-nowrap rounded-[32px] bg-white min-h-[46px] items-center gap-4 justify-center mt-20 ">
              {Data.map((each) => (
                <button
                  className={classNames(
                    `${each.bg} ${each.color} rounded-[32px] text-nowrap  w-fit h-[38px] py-2 px-4 `
                  )}
                  onClick={() => handleTab(each.id)}
                  key={each.id}
                >
                  {" "}
                  {each.text}{" "}
                </button>
              ))}
            </div>
          ,
          component: currentTab.current
    };
  } else if(render === 'gem') {
    return {
        tab: 
            <div className="flex min-w-[208px] flex-wrap md:flex-nowrap mx-auto p-1 m-auto rounded-[32px] bg-white  h-[46px] items-center gap-4 justify-center mt-[38px] ">
              {Data.map((each) => (
                <button
                  className={classNames(
                    `${each.bg} ${each.color} rounded-[32px] text-nowrap  w-fit h-[38px] text-[18px] font-lato font-bold text-bodyText py-2 px-4 `
                  )}
                  onClick={() => handleTab(each.id)}
                  key={each.id}
                >
                  {" "}
                  {each.text}{" "}
                </button>
              ))}
            </div>
          ,
          component: currentTab.current
    };
  }
   else {
    return <p>invalid props passed</p>;
  }
};
