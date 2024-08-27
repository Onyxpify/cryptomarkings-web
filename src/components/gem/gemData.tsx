import { svgs } from "../svgs";
import Messages from "./Messages";
import Signals from "./Signals";

export const gemSignalTable = [

    {
        id: 1,
        row1: {
            title: 'Asset',
            text: <div className="flex flex-row items-center gap-1 justify-between" > <span> {svgs.btc2} </span> <span className="font-lato font-normal text-[18px] text-mainText"> BTC <br /> Bitcoin </span> </div>
        },
        row2: {
            title: 'Call',
           text: 'BUY',
        },
        row3: {
            title: 'Entry Price ',
           price: '$68,860',
        },
        row4: {
            title: 'Current Price',
           price: '$71,231',
        },
        row5: {
            title: 'Date ',
           price: '15-05-2024',
        },
      
    },
    {
        id: 2,
        row1: {
            title: 'Asset',
            text: <div className="flex gap-1 flex-row items-center justify-between" > <span> {svgs.dodge2} </span> <span className="font-lato font-normal text-[18px] text-mainText"> DOGE <br /> Dogecoin </span> </div>
        },
        row2: {
            title: 'Call',
           text: 'BUY',
        },
        row3: {
            title: 'Entry Price ',
           price: '$68,860',
        },
        row4: {
            title: 'Current Price',
           price: '$71,231',
        },
        row5: {
            title: 'Date ',
           price: '15-05-2024',
        },
      
    },
    {
        id: 3,
        row1: {
            title: 'Asset',
            text: <div className="flex gap-1 flex-row items-center justify-between" > <span> {svgs.btc2} </span> <span className="font-lato font-normal text-[18px] text-mainText"> BTC <br /> Bitcoin </span> </div>
        },
        row2: {
            title: 'Call',
           text: 'BUY',
        },
        row3: {
            title: 'Entry Price ',
           price: '$68,860',
        },
        row4: {
            title: 'Current Price',
           price: '$71,231',
        },
        row5: {
            title: 'Date ',
           price: '15-05-2024',
        },
      
    },
    
]

let id = 0;
export const gemTab = [
    {
        id: id++,
        text: 'Signals',
        bg: 'bg-sec',
        color: 'text-pri',
        component: <Signals />,
    },
    {
        id: id++,
        text: 'Messages',
      color: 'text-bodyText',
      bg: 'bg-white',
      component: <Messages />,
    },
   
]

export const msgData = [
    {
        id: 1,
        img: svgs.chartAdmin,
        msg: `Pen auto auto rectangle reesizing arrow move. Mask editor star blur draft. Effect fill team ipsum asset vector editor overflow mask variant. Rotate editor layer distribute italic boolean export underline. Rotate align subtract text object text `,
        title: 'Admin',
        time: 'Today 11:30 PM',
    },
    {
        id: 2,
        img: svgs.chartYou,
        msg: `Pen auto auto rectangle reesizing arrow move. Mask editor star blur draft. Effect fill team ipsum asset vector `,
        title: 'You',
        time: 'Today 11:35 PM',
    },
    {
        id: 3,
        img: svgs.chartAdmin,
        msg: `Pen auto auto rectangle reesizing arrow move. Mask editor star blur draft. Effect fill team ipsum asset vector editor overflow mask variant. Rotate editor layer distribute italic boolean export underline. Rotate align subtract text object text `,
        title: 'Admin',
        time: 'Today 11:30 PM',
    },
    {
        id: 4,
        img: svgs.chartYou,
        msg: `Pen auto auto rectangle reesizing arrow move. Mask editor star blur draft. Effect fill team ipsum asset vector `,
        title: 'You',
        time: 'Today 11:35 PM',
    },
]