"use client";
import React from "react";
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
    <div id="Accordion" className="space-y-3">
      {faqs.map((each: faqsTypes, index: number) => {
        const isActive = expanded === each.key;
        return (
          <Accordion
            expanded={isActive}
            onChange={handleChange(each.key)}
            key={each.id}
            disableGutters
            square
            className={`!rounded-xl !shadow !border !border-gray-200 !bg-white/90 !backdrop-blur-md transition-all duration-300 ${isActive ? '!border-[#95cea5] !shadow-lg' : ''}`}
            sx={{
              margin: 0,
              boxShadow: 'none',
              borderRadius: '0.75rem',
              border: isActive ? '1.5px solid #95cea5' : '1px solid #e5e7eb',
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="transition-transform duration-300 text-[#95cea5]" style={{ fontSize: 22, transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' }} />}
              aria-controls={each.ac}
              id={each.key}
              tabIndex={-1}
              className="!rounded-xl !px-4 !py-2 !font-semibold !text-base !text-[#003d2b] hover:!bg-[#e6f7ef] transition-colors duration-200 min-h-0"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#95cea5] text-sm">{index + 1}.</span>
                <span className="font-semibold text-[#003d2b] text-sm md:text-base">{each.title}</span>
              </div>
            </AccordionSummary>
            <AccordionDetails className="!rounded-xl !px-4 !py-2 !bg-[#f2f2f2]/90 !text-gray-800 animate-fade-in-expand">
              <div className="prose max-w-none text-gray-800 text-sm md:text-base leading-relaxed">
                {parse(each.text)}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
      <style jsx>{`
        .animate-fade-in-expand {
          animation: fadeInExpand 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes fadeInExpand {
          from {
            opacity: 0;
            transform: scaleY(0.97);
          }
          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
};

export default MyAccordion;
