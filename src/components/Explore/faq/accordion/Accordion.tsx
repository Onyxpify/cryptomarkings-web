import React from 'react';
import './accordion.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqs } from '../faqData';

const MyAccordion = () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
      <div id='Accordion'>
          {
              faqs.map((each: any) => {
                  return (
                       <Accordion sx={{backgroundColor: '#F2F2F2',border: 'none',boxShadow: 'none'}} expanded={expanded === `${each.key}`} onChange={handleChange(each.key)} key={each.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={each.ac}
          id={each.key}
        >
          <Typography className='title'> <span> {each.id+1}. </span> {each.title} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text'>
            {each.text}
          </Typography>
        </AccordionDetails>
      </Accordion>
                  )
              })
          }
    </div>
  )
}

export default MyAccordion