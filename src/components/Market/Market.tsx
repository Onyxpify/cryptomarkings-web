import { Link } from 'react-router-dom'
import { FaLessThan } from 'react-icons/fa';
import './market.scss';
import { useRef, useState } from 'react';
import { marketTabs } from './marketTab';
import Header from '../header/Header';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRecoilState } from 'recoil';
import { ActiveMarketTab } from '../atoms/market';

const Market = () => {
    let [tabs, setTabs] = useState(marketTabs);
    let [activeTab, setActivetab] = useRecoilState(ActiveMarketTab);

    function handleTabClick(id: number) {
        let upd = tabs.map(each => {
            if (each.id === id) {
                each.active = 'active';
                setActivetab(each.component);
            } else {
                each.active = '';
            }
            return each;
        })

        setTabs(upd);
    }
  return (
      <div id='Market'>
          <Header icon={<ArrowBackIosIcon />} text={'Market'} comp={ <div className="text">Spot</div>} class='' />
          <div className="tab">
              {
                  tabs.map(tab => {
                      return (
                          <div onClick={()=> handleTabClick(tab.id)} id={tab.active} key={tab.id}>
                              {tab.text}
                          </div>
                      )
                  })
              }
          </div>
          <div className="tabContent">
              {activeTab}
          </div>
    </div>
  )
}

export default Market