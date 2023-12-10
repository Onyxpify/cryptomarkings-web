import React from 'react';
import './dashboard.scss';
import Dash_line1 from './dash_line1/Dash_line1';
import Dash_line2 from './dash_line2/Dash_line2';
import Dash_line3 from './dash_line3/Dash_line3';
import Dash_line4 from './dash_line4/Dash_line4';
import Footer from '../Footer/Footer';

const Dashboard = () => {
  return (
      <div id='Dashboard'>
      <Dash_line1 />
      <Dash_line2 />
      <Dash_line3 />
      <Dash_line4 />
      <Footer bg='white' />
    </div>
  )
}

export default Dashboard