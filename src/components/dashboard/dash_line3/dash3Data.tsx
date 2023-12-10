import { svgs } from "../../svgs";

let id = 0;
export const overviewCoins = [
    {
        id: id++,
        text: 'Binance Wallet Overview',
        coin: svgs.bnd,
        balance: '10,000 USDT',
        bal_ratio: { usdt: '$6,500 (65%)  ', btc: '$2,500 (25%)', others: '$1,000 (10%)  ' },
        ["Today’s PNL"]: '-$0.003 (0.003%)',
        assets: [
            {
                id: id++,
                icon: svgs.usdt,
                text: 'Tether USD',
                bal: "10,000 USDT",
            },
            {
                id: id++,
                icon: svgs.btc,
                text: 'Bitcoin',
                bal: "0.23598 BTC",
            },
            {
                id: id++,
                icon: svgs.eth,
                text: 'Ethereum',
                bal: "3.2 ETH",
            },
            {
                id: id++,
                icon: svgs.ada,
                text: 'Cardano',
                bal: "502 ADA",
            },
        ]
    },
    {
        id: id++,
        text: 'Tether USD Wallet Overview',
        coin: svgs.usdt,
        balance: '5,000 USDT',
        bal_ratio: { usdt: '$5,500 (65%)  ', btc: '$3,500 (25%)', others: '$1,000 (10%)  ' },
        ["Today’s PNL"]: '-$0.003 (0.003%)',
        assets: [
            {
                id: id++,
                icon: svgs.usdt,
                text: 'Tether USD',
                bal: "10,000 USDT",
            },
            {
                id: id++,
                icon: svgs.btc,
                text: 'Bitcoin',
                bal: "0.23598 BTC",
            },
            {
                id: id++,
                icon: svgs.eth,
                text: 'Ethereum',
                bal: "3.2 ETH",
            },
            {
                id: id++,
                icon: svgs.ada,
                text: 'Cardano',
                bal: "502 ADA",
            },
        ]
    },
    {
        id: id++,
        text: 'Bitcoin Wallet Overview',
        coin: svgs.btc,
        balance: '3,000 USDT',
        bal_ratio: { usdt: '$4,500 (65%)  ', btc: '$3,500 (25%)', others: '$2,000 (10%)  ' },
        ["Today’s PNL"]: '-$0.003 (0.003%)',
        assets: [
            {
                id: id++,
                icon: svgs.usdt,
                text: 'Tether USD',
                bal: "10,000 USDT",
            },
            {
                id: id++,
                icon: svgs.btc,
                text: 'Bitcoin',
                bal: "0.23598 BTC",
            },
            {
                id: id++,
                icon: svgs.eth,
                text: 'Ethereum',
                bal: "3.2 ETH",
            },
            {
                id: id++,
                icon: svgs.ada,
                text: 'Cardano',
                bal: "502 ADA",
            },
        ]
    },
    {
        id: id++,
        text: 'Ethereum Wallet Overview',
        coin: svgs.eth,
        balance: '2,000 USDT',
        bal_ratio: { usdt: '$7,500 (65%)  ', btc: '$2,000 (25%)', others: '$1,500 (10%)  ' },
        ["Today’s PNL"]: '-$0.003 (0.003%)',
        assets: [
            {
                id: id++,
                icon: svgs.usdt,
                text: 'Tether USD',
                bal: "10,000 USDT",
            },
            {
                id: id++,
                icon: svgs.btc,
                text: 'Bitcoin',
                bal: "0.23598 BTC",
            },
            {
                id: id++,
                icon: svgs.eth,
                text: 'Ethereum',
                bal: "3.2 ETH",
            },
            {
                id: id++,
                icon: svgs.ada,
                text: 'Cardano',
                bal: "502 ADA",
            },
        ]
    },
    {
        id: id++,
        text: 'Cardano Wallet Overview',
        coin: svgs.ada,
        balance: '1,500 USDT',
        bal_ratio: { usdt: '$6,000 (65%)  ', btc: '$2,500 (25%)', others: '$1,500 (10%)  ' },
        ["Today’s PNL"]: '-$0.003 (0.003%)',
        assets: [
            {
                id: id++,
                icon: svgs.usdt,
                text: 'Tether USD',
                bal: "10,000 USDT",
            },
            {
                id: id++,
                icon: svgs.btc,
                text: 'Bitcoin',
                bal: "0.23598 BTC",
            },
            {
                id: id++,
                icon: svgs.eth,
                text: 'Ethereum',
                bal: "3.2 ETH",
            },
            {
                id: id++,
                icon: svgs.ada,
                text: 'Cardano',
                bal: "502 ADA",
            },
        ]
    },
]