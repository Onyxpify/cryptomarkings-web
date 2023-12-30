import './sidebar.scss';
import { useState } from 'react';
import { sideList } from './sidebarData';
import { useRecoilState } from 'recoil';
import { selectedSide, sideComps } from '../../atoms/sidebar';

const Sidebar = () => {
    let [list, setList] = useState(sideList);
    let [comps, setComps] = useRecoilState(sideComps);
    let [clicked, setClicked] = useRecoilState(selectedSide);
    function handleClick(id: any) {
       let upd:any= list.map(each => {
            if (each.id === id) {
                each.active = 'active';
                setComps(each.component);
                setClicked(each.component);
                
            } else {
                each.active = '';
           }
           return each;
       })
        setList(upd);
    }
  return (
      <div id='Sidebar'>
          {
              list.map(each => {
                  return (
                      <div onClick={(e)=>{handleClick(each.id)}} key={each.id}  className={`item ${each.active}`}>
                          <span className="icon"> {each.icon} </span>
                          <span className="text">
                              {each.text}
                           </span>
                      </div>
                  )
              })
          }
    </div>
  )
}

export default Sidebar