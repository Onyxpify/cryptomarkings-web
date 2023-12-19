import React from 'react';
import './faq.scss';
import MyAccordion from './accordion/Accordion';
import ScrollX from '../../scrollX/ScrollX';

const Faq = () => {
  return (
      <div id='Faq'>
          <h3>Frequently Asked Questions?</h3>
          <ScrollX className="line1">
              <div className="qa">
              <MyAccordion />
          </div>
          <div className="icon">
              
          </div>
          </ScrollX>
    </div>
  )
}

export default Faq