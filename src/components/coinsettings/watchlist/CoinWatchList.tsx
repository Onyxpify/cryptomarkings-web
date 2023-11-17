import React, { useReducer, useState } from 'react'
import './coinwatchlist.scss';
import WatchListCard from './watchListCard/WatchListCard';
import { useRecoilValue } from 'recoil';
import { watchList } from '../../atoms/market';

const CoinWatchList = () => {
  let list = useRecoilValue(watchList);
  return (
      <div id='CoinWatchList'>
          <h3> {list.length === 0 ? `No coin on Your WachList` : list.length === 1 ? `${list.length} coin on your watchlist` : `${list.length} coins on your watchlist`} </h3>
          <WatchListCard   />
          
    </div>
  )
}

export default CoinWatchList