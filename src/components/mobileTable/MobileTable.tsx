import React from "react";
import "./mobiletable.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { svgs } from "../svgs";

interface p {
  array: any;
  head_item1: any;
  head_item2: any;
  head_item3: any;

}
const MobileTable = ({
  array,
  head_item1,
  head_item2,
  head_item3,

}: p) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div id="MobileTable">
      {array.map((each: any) => {
        if (each.id > 1) {
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
                  className="accord_list"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={each.ac}
                id={each.key}
              >
                <Typography className="title">
                  <span className="icon">
                    {each.cell1.icon ? (
                      <img src={each.cell1.icon} alt="user icon" />
                    ) : (
                      <></>
                    )}
                  </span>
                  <span className="name"> {each.cell1.text} </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text">
                  <div className="line">
                    <div className="cell1">
                                  <span>{svgs.dollar2} </span>
                                  <span>{head_item1}</span>
                    </div>
                    <div className="cell2"> {each.cell2.text} </div>
                  </div>
                  <div className="line">
                    <div className="cell1">
                      <span>{svgs.percent}</span> <span>{head_item2}</span>
                    </div>
                    <div className="cell2"> {each.cell3.text} </div>
                  </div>
                  <div className="line">
                    <div className="cell1">
                      <span>{svgs.packageIcon}</span> <span>{head_item3}</span>
                    </div>
                    <div className="cell2"> {each.cell4.text} </div>
                  </div>
                 
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        }
      })}
    </div>
  );
};

export default MobileTable;

// import React from 'react'

// const MobileTable = () => {
//   return (
//     <div id='MobileTable'>MobileTable</div>
//   )
// }

// export default MobileTable
