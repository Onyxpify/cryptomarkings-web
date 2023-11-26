import React from 'react';
import './informed.scss';
import FourBtn from '../fourBtn/FourBtn';
import ScrollX from '../scrollX/ScrollX';

const Informed = () => {
  return (
      <ScrollX className='Informed'>
          <div className="centent">
              <div className="img">
              
          </div>
          <div className="text">
              <h3>Stay Informed with Cryptomarkings' Blog</h3>
              <p>For the latest crypto updates and popular trading strategies.</p>
          </div>
          <div className="icons">
              <FourBtn style='informed-bt' />
          </div>
          </div>
    </ScrollX>
  )
}

export default Informed