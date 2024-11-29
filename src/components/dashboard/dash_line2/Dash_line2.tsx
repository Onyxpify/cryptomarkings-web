import './dash_line2.scss';
import MyButton from '../../button/MyButton';
import Logo from '../../logo/Logo';
import React from 'react';

const Dash_line2 = () => {
  return (
      <div className='Dash_line2'>
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
    </div>
  )
}

export default React.memo(Dash_line2)