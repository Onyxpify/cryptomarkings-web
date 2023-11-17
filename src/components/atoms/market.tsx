import {atom} from 'recoil'
import Manual from '../Market/manual/Manual'
export const ActiveMarketTab = atom({
    key: 'ActiveMarketTab',
    default: <Manual />
});
interface watchListGuard {
    pair: any,
    icon: any,
    price: number,
    applyPriceToAll: boolean,
    id: number,
    text: string,
}
let d: watchListGuard[]=[];
export const watchList = atom({
    key: 'watchList',
    default: d,
})