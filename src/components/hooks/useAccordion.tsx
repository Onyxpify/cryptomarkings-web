import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import classNames from "classnames";

export const useAccordion = (data: any[], render: string) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [Data, setData] = useState(data);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      let upd = Data.map((each) => {
        if (panel.toString().includes(each.id + 1) && isExpanded === true) {
          each.open = true;
        } else {
          each.open = false;
        }
        return each;
      });
      setData(upd);
    };

  //   return virations
  if (render === "subscription") {
    return (
      <div>
        {Data.map((each: any) => {
          return (
            <Accordion
              expanded={expanded === `${each.key}`}
              onChange={handleChange(each.key)}
              key={each.id}
              className=" list-none "
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={each.ac}
                id={each.key}
              >
                <Typography className=" flex items-start justify-start flex-col ">
                  <span className="flex items-center justify-start gap-4 flex-row ">
                    <span className="font-lato font-bold text-[18px] text-mainText ">
                      {each.headerTitle}
                    </span>
                    <span
                      className={classNames(
                        "w-[67px] h-[22px] flex items-center justify-center font-lato font-bold text-xs py-1 px-4 rounded-2xl ",
                        {
                          "text-active bg-greenPrompt1 ": each.open,
                          "text-bodyText bg-foreground": !each.open,
                        }
                      )}
                    >
                      {" "}
                      {each.open ? "Active" : "Inactive"}{" "}
                    </span>
                  </span>
                  <span className="font-lato font-normal text-[18px] text-bodyText ">
                    {" "}
                    {each.titlePrice}{" "}
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="font-lato font-bold text-[18px] text-mainText ">
                  {each.detailsTitle}
                </Typography>
                <span>
                  {each.detailsList.map((list: any, i: number) => (
                    <span
                      className="flex flex-row items-center justify-start gap-[6px] my-[11px] font-lato font-normal text-[18px] text-bodyText "
                      key={i}
                    >
                      {" "}
                      {list.icon} {list.text}{" "}
                    </span>
                  ))}
                </span>
                <button className="flex items-center justify-center w-[110px] h-[54px] rounded-2xl py-4 bg-pri text-foreground font-lato font-normal text-[18px] ">
                  Subscribe
                </button>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    );
  } else if (render === "faqs") {
    return (
      <div id="Accordion">
        {Data.map((each: any) => {
          return (
            <Accordion
              sx={{
                backgroundColor: "#F2F2F2",
                border: "none",
                boxShadow: "none",
              }}
              expanded={expanded === `${each.key}`}
              onChange={handleChange(each.key)}
              key={each.id}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={each.ac}
                id={each.key}
              >
                <Typography className="title">
                  {" "}
                  <span> {each.id + 1}. </span> {each.title}{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text">{each.text}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    );
  } else {
    return <p>Invalid data or render props</p>;
  }
};
