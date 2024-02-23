import React from 'react'
import DashNav from '../dashNav/DashNav'
import ScrollY from '../../scrolly/ScrollY'
import './dashlayout.scss';
import Sidebar from '../sidebar/Sidebar';
import { useRecoilValue } from 'recoil';
import { sideComps } from '../../atoms/sidebar';
import Footer from '../../Footer/Footer';
import { hideSide } from '../../atoms/rewards';
import DashMobileNav from '../dashMobileNav/DashMobileNav';
interface p{
    children: any,
    className: string,
}
const DashLayout = () => {
    let comp = useRecoilValue(sideComps);
    let hide = useRecoilValue(hideSide);
  return (
      <div id='DashLayout'>
          <div id="Line-1">
              <DashNav />
          </div>
          <DashMobileNav />
          <div className={hide.class} id="Line-2">
            
                   <ScrollY className="left box">
                  <Sidebar />
              </ScrollY>
              <ScrollY className="main box">
                  {comp}
                   <Footer bg='white' color='#808080' />
              </ScrollY>
          </div>
    </div>
  )
}

export default DashLayout