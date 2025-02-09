import { svgs } from "../../svgs";
import Closed from "./Closed";
import Openned from "./Openned";
import Robot from "./Robot";

export const centurionTabs = [
    {
        id: 1,
        text: 'Robot Settings',
        component: <Robot />,
        state: true,
    },
    {
        id: 2,
        text: 'Open Trades',
        component: <Openned />,
        state: false,
    },
    {
        id: 3,
        text: 'Closed Trades',
        component: <Closed />,
        state: false,
    },
]

export const openTradesData = [

    {
        id: 1,
        row1: {
            title: 'Symbol',
            text: <div className="flex flex-row items-center justify-between gap-1" > <span> {svgs.xrp} </span> <span className="font-lato font-normal text-[18px] text-mainText"> XRP/USDT </span> </div>
        },
        row2: {
            title: 'Floating Profit',
           price: '$0.0058',
           per: '+0.04%'
        },
        row3: {
            title: 'Quantity',
           price: '29.000',
        },
        row4: {
            title: 'Date',
           price: '15-05-2024',
        },
        row5: {
            title: 'Entry Price ',
           price: '$0.051234',
        },
        row6: {
            title: 'Current Price',
           price: '$0.543242',
        },
    },
    {
        id: 2,
        row1: {
            title: 'Symbol',
            text: <div className="flex flex-row items-center justify-between gap-1" > <span> {svgs.xrp} </span> <span className="font-lato font-normal text-[18px] text-mainText"> XRP/USDT </span> </div>
        },
        row2: {
            title: 'Floating Profit',
           price: '$0.0058',
           per: '+0.04%'
        },
        row3: {
            title: 'Quantity',
           price: '29.000',
        },
        row4: {
            title: 'Date',
           price: '15-05-2024',
        },
        row5: {
            title: 'Entry Price ',
           price: '$0.051234',
        },
        row6: {
            title: 'Current Price',
           price: '$0.543242',
        },
    },
    {
        id: 3,
        row1: {
            title: 'Symbol',
            text: <div className="flex flex-row items-center justify-between gap-1" > <span> {svgs.xrp} </span> <span className="font-lato font-normal text-[18px] text-mainText"> XRP/USDT </span> </div>
        },
        row2: {
            title: 'Floating Profit',
           price: '$0.0058',
           per: '+0.04%'
        },
        row3: {
            title: 'Quantity',
           price: '29.000',
        },
        row4: {
            title: 'Date',
           price: '15-05-2024',
        },
        row5: {
            title: 'Entry Price ',
           price: '$0.051234',
        },
        row6: {
            title: 'Current Price',
           price: '$0.543242',
        },
    },
]
export const closeTradesData = [

    {
        id: 1,
        row1: {
            title: 'Symbol',
            text: <div className="flex flex-row items-center justify-between gap-1" > <span> {svgs.xrp} </span> <span className="font-lato font-normal text-[18px] text-mainText"> XRP/USDT </span> </div>
        },
        row2: {
            title: 'Amount',
           price: '15.0133',
        },
        row3: {
            title: 'Order ID',
           price: '61675144417',
        },
        row4: {
            title: 'Quantity',
           price: '29.000',
        },
        row5: {
            title: 'Date ',
           price: '15-05-2024',
        },
        row6: {
            title: 'Price ',
           price: '$0.51234',
        },
        row7: {
            title: 'Type',
            text: true,
        }
    },
    {
        id: 2,
        row1: {
            title: 'Symbol',
            text: <div className="flex flex-row items-center justify-between gap-1" > <span> {svgs.xrp} </span> <span className="font-lato font-normal text-[18px] text-mainText"> ADA/USDT </span> </div>
        },
        row2: {
            title: 'Amount',
           price: '15.0133',
        },
        row3: {
            title: 'Order ID',
           price: '61675144417',
        },
        row4: {
            title: 'Quantity',
           price: '29.000',
        },
        row5: {
            title: 'Date ',
           price: '15-05-2024',
        },
        row6: {
            title: 'Price ',
           price: '$0.51234',
        },
        row7: {
            title: 'Type',
            text: false,
        }
    },
    {
        id: 3,
        row1: {
            title: 'Symbol',
            text: <div className="flex flex-row items-center justify-between gap-1" > <span> {svgs.xrp} </span> <span className="font-lato font-normal text-[18px] text-mainText"> BTC/USDT </span> </div>
        },
        row2: {
            title: 'Amount',
           price: '15.0133',
        },
        row3: {
            title: 'Order ID',
           price: '61675144417',
        },
        row4: {
            title: 'Quantity',
           price: '29.000',
        },
        row5: {
            title: 'Date ',
           price: '15-05-2024',
        },
        row6: {
            title: 'Price ',
           price: '$0.51234',
        },
        row7: {
            title: 'Type',
            text: false,
        }
    },
    {
        id: 4,
        row1: {
            title: 'Symbol',
            text: <div className="flex flex-row items-center justify-between gap-1" > <span> {svgs.xrp} </span> <span className="font-lato font-normal text-[18px] text-mainText"> TRX/USDT </span> </div>
        },
        row2: {
            title: 'Amount',
           price: '15.0133',
        },
        row3: {
            title: 'Order ID',
           price: '61675144417',
        },
        row4: {
            title: 'Quantity',
           price: '29.000',
        },
        row5: {
            title: 'Date ',
           price: '15-05-2024',
        },
        row6: {
            title: 'Price ',
           price: '$0.51234',
        },
        row7: {
            title: 'Type',
            text: true,
        }
    },
    
]