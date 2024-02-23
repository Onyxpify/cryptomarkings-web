import React,{useState} from 'react';
import './dashmobilenav.scss';
import Sidebar from '../sidebar/Sidebar';
import { sideSvgs } from '../sidebar/sidebarSvgs';
import Dashboard from '../Dashboard';
import { svgs } from '../../svgs';

const DashMobileNav = () => {
    let [selected, setSelected] = useState({ icon: sideSvgs.dashboard, comp: <Dashboard />, text: 'Dashboard' });
    let [drop, setDrop] = useState(false);
  return (
      <div id='DashMobileNav'>
          <div className="header">
              <div className="cell1">
                  <span>{ selected.icon}</span>
                  <span className='text'> {selected.text} </span>
              </div>
              <div onClick={()=> setDrop(true)} className="cell2"> {svgs.gt} </div>
          </div>
          {drop && 
          <div className="dropdown">
              <Sidebar setDrop={setDrop} setSelected={setSelected} id='MobileSidebar' />
          </div>}
    </div>
  )
}

export default DashMobileNav