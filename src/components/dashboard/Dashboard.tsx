import  React, { useEffect, useRef } from 'react';
import './dashboard.scss';
import Dash_line1 from './dash_line1/Dash_line1';
import Dash_line2 from './dash_line2/Dash_line2';
import Dash_line3 from './dash_line3/Dash_line3';
import Dash_line4 from './dash_line4/Dash_line4';
import { fromClipboard } from '../services/fromClipboard';
import { toClipboard } from '../services/toClipboard';
import { useRecoilState } from 'recoil';
import { saveToLocalstroage } from '../services/toLocalstorge';
import { getFromLocalstroage } from '../services/fromStorage';
import { userInfo, userInfoT } from '../atoms/userInfo';


const Dashboard = () => {
  let [,setUser] = useRecoilState<userInfoT>(userInfo);
  
  let userData = useRef<any>(null);

  useEffect(()=> {
    fromClipboard()
    .then(async(ret:any)=> {
      if(ret) {
      setUser(ret);
      userData.current = ret;
        try {
          await saveToLocalstroage('userYou',ret); 
          await toClipboard('');
        } catch (error) {
        }
      }else{
        if(!userData.current.user_id) {
          window.location.href = import.meta.env.VITE_NEXT_URL+"/login";

        }
  
       }

    })
    .catch(async()=> {

      getFromLocalstroage('userYou')
      .then((ans:any)=> {
        setUser(ans);
        userData.current = ans;
      })
      .catch(()=> {
       if(!userData.current.user_id) {
         window.location.href = import.meta.env.VITE_NEXT_URL+"/login";

       }
      })
    
    })
   },[]);

   useEffect(()=> {
   },[])
  return (
      <div id='Dashboard'>
      <Dash_line1 />
      <Dash_line2 />
      <Dash_line3 />
      <Dash_line4 />
      {/* <Footer bg='white' color='#808080' /> */}
    </div>
  )
}

export default React.memo(Dashboard)