import React from 'react';
import './informed.scss';
import FourBtn from '../fourBtn/FourBtn';

const Informed = () => {
  return (
      <div className='Informed w-[95vw] ms-[5vw] me-0 md:w-[90vw] md:ms-auto md:me-auto  overflow-x-scroll myScrollBar'>
          <div className="centent  overflow-x-scroll myScrollBar">
              <div className="img">
              
          </div>
          <div className="text">
              <h3>Stay Informed with Blacktinum&apos; Blog</h3>
              <p>For the latest crypto updates and popular trading strategies.</p>
          </div>
          <div className="icons">
              <FourBtn style='informed-bt' />
          </div>
          </div>
    </div>
  )
}

export default Informed