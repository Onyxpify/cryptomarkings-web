import React, { useReducer } from 'react'
import './coinwatchlist.scss';
type State = any;
type Action = {type:string,coin?:string};
function handleCount(state: State, action: Action) {
    let newState;
    switch (action.type) {
        case 'add':
            newState = { ...state, count: state.count + 1 };
            break;
            case 'subtract': 
            newState = {...state, count: state.count - 1}
            break;
            case 'reset': 
            newState = {...state, count: 0}
            break;
            case 'rename coin': 
            newState = { ...state, coin: action.coin }
            break;
    
        default:
            break;
    }
    return newState;
}
const CoinWatchList = () => {
    let [list, setList] = useReducer(handleCount, { count: 0, coin: 'btc', })
    let { count, coin } = list;
  return (
      <div id='CoinWatchList'>
          <h3>Coin Watch List for {coin} </h3>
          <h6>You have {count} on your Watch List </h6>
          <button onClick={()=> setList({type: 'add',})} > Count ++</button>
          <button onClick={()=> setList({type: 'subtract'})} > Count --</button>
          <button onClick={()=> setList({type: 'reset'})} > reset</button>
          <button onClick={()=> setList({type: 'rename coin',coin: 'eth',})} > rename coin</button>
    </div>
  )
}

export default CoinWatchList