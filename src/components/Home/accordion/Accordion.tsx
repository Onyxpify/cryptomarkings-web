"use client";
import React from "react";
import "./accordion.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqs, faqsTypes } from "../faq/faqData";
import parse from "html-react-parser";

const MyAccordion = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div id="Accordion">
      {faqs.map((each:faqsTypes,index:number) => {
        return (
          <Accordion
            expanded={expanded === `${each.key}`}
            onChange={handleChange(each.key)}
            key={each.id}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={each.ac}
              id={each.key}
            >
              <div className="title">
                {" "}
                <span> {index + 1}. </span> {each.title}{" "}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="text">{parse(each.text)}</div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default MyAccordion;
