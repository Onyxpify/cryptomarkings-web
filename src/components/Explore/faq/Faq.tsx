import './faq.scss';
import ScrollX from '../../scrollX/ScrollX';
import MyAccordion from '../../accordion/Accordion';
import { faqs } from './faqData';

const Faq = () => {
  return (
      <div id='Faq'>
          <h3>Frequently Asked Questions?</h3>
          <ScrollX className="line1">
              <div className="qa">
              <MyAccordion data={faqs} render='faqs' />
          </div>
          <div className="icon">
              
          </div>
          </ScrollX>
    </div>
  )
}

export default Faq