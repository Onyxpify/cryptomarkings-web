import {atom} from 'recoil'
import Manual from '../Market/manual/Manual'
export const ActiveMarketTab = atom({
    key: 'ActiveMarketTab',
    default: <Manual />
})