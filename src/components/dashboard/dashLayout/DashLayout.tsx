import React from 'react'
import DashNav from '../dashNav/DashNav'
import ScrollY from '../../scrolly/ScrollY'
import './dashlayout.scss';
import Sidebar from '../sidebar/Sidebar';
import { useRecoilValue } from 'recoil';
import { sideComps } from '../../atoms/sidebar';
interface p{
    children: any,
    className: string,
}
const DashLayout = () => {
    let comp = useRecoilValue(sideComps);
  return (
      <div id='DashLayout'>
          <div id="Line-1">
              <DashNav />
          </div>
          <div id="Line-2">
              <ScrollY className="left box">
                  <Sidebar />
              </ScrollY>
              <ScrollY className="main box">
                  {comp}
              </ScrollY>
          </div>
    </div>
  )
}

export default DashLayout