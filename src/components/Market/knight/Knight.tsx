import { BiSearch } from 'react-icons/bi'
import '../manual/manual.scss';
import { useState,useRef, useEffect } from 'react';
import { manualTrades } from '../manual/manualTrades';
import Search from '../../search/Search';
import { useNavigate } from 'react-router-dom';
const Knight = () => {
  let [list, setList] = useState(manualTrades);
  let [count, setCount] = useState({ start: 1, end: 3 });
  let showing: any = useRef(manualTrades.filter(each => (each.id >= count.start) && (each.id <= count.end)));
  let toggleMore = useRef(true);
  let [search, setSearch] = useState('');
  let redir = useNavigate();

  async function handleSearch(e:any) {
    search = search.toLowerCase();
    if (e.code === 'Backspace') {
      toggleMore.current = false;
      let upd = showing.current.filter((each:any) => {
        let pair = each.pair.toLowerCase();
        if ((pair.indexOf(search) >= 0) && (search.length != 0)) {
          return each;
        }
      
      });
      setList(upd);
    } else {
       toggleMore.current = false;
      let upd  = list.filter(each => {
        let pair = each.pair.toLowerCase();
        // console.log(search, pair);
        if ((pair.indexOf(search)  >= 0) && (search.length != 0)) {
          // console.log('match')
          return each;
        }
        
      })
        
          
          setList(upd);         
      
    }
    if (search.length === 0) {
      toggleMore.current = true;
      setList(showing.current);
        }
  }
    useEffect(()=> { },[list,showing.current])
  return (
      <div id="Manual">
          <Search handleSearch={handleSearch} search={search}setSearch={setSearch} />
      <div className="available-coins">
        {
          list.filter(each=> (each.id >= count.start) && (each.id <= count.end)).map(each => {
            return (
              <div onClick={(e) => { redir(`/coinsettings/Knight_${each.id}`);console.log(each.id) }} className='coin' key={each.id}>
                <div className="block">
                  <div className="cell1">
                  <span className={each.class}> {each.name} </span>
                  <span className='gray'> {each.pair} </span>
                </div>
                <div className="cell2">
                  <span className='price'> {each.price} </span>
                  <span>&nbsp;</span>
                </div>
                <div className="cell3">
                  <span className='green'> {each.perInc} </span>
                  <span className='gray'> {each.time} </span>
                  </div>
                  <div className="watch">
                    {each.watch}
                  </div>
                </div>
              </div>
            )
          })
        }
        {
          toggleMore.current && 
          <div onClick={() => { count.end <= manualTrades.length && setCount({ start: 1, end: count.end += 3 }); setList(manualTrades.filter(each => (each.id >= count.start) && (each.id <= count.end)))   } } className="more">
         <span> More ...</span>
        </div>
        }
      </div>
    </div>
  )
}

export default Knight