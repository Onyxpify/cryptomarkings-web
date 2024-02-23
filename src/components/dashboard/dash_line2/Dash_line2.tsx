import React from 'react';
import './dash_line2.scss';
import MyButton from '../../button/MyButton';
import Logo from '../../logo/Logo';
import ScrollX from '../../scrollX/ScrollX';

const Dash_line2 = () => {
  return (
      <ScrollX className='Dash_line2'>
          <div className="img"></div>
          <div className="cell2">
              <h3>Crypto Gems Signals</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod consectetur repellendus qui nemo. Fugit architecto autem fugiat aperiam sed. Harum, fugiat.</p>
          </div>
          <div className="bt">
              <MyButton bg='#95CEA5' text={'Subscribe Now'} />
          </div>
          <div className="logo">
              <Logo />
          </div>
    </ScrollX>
  )
}

export default Dash_line2