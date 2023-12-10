import Explore from "../../Explore/Explore";
import Market from "../../Market/Market";
import More from "../../More/More";
import TraderList from "../../TraderList/TraderList";
import ApiBinding from "../../apiBinding/ApiBinding";
import Gem from "../../gem/Gem";
import Revenue from "../../revenue/Revenue";
import Rewards from "../../rewards/Rewards";
import Subscription from "../../subscription/Subscription";
import Dashboard from "../Dashboard";
import { sideSvgs } from "./sidebarSvgs";
import { PiDotsNineLight } from "react-icons/pi";

let id = 0;
export const sideList = [
    {
        id: id++,
        text: 'Dashboard',
        icon: sideSvgs.dashboard,
        active: 'active',
        component: <Dashboard />
    },
    {
        id: id++,
        text: 'Trader List',
        icon: sideSvgs.traderlist,
        active: '',
         component: <TraderList />
    },
    {
        id: id++,
        text: 'Revenue',
        icon: sideSvgs.revenue,
        active: '',
         component: <Revenue />
    },
    {
        id: id++,
        text: 'GEM',
        icon: sideSvgs.gem,
        active: '',
         component: <Gem />
    },
    {
        id: id++,
        text: 'Market',
        icon: sideSvgs.market,
        active: '',
         component: <Market />
    },
    {
        id: id++,
        text: 'Rewards',
        icon: sideSvgs.rewards,
        active: '',
         component: <Rewards />
    },
    {
        id: id++,
        text: 'API Bindings',
        icon: sideSvgs.api,
        active: '',
         component: <ApiBinding />
    },
    {
        id: id++,
        text: 'Subscription',
        icon: sideSvgs.subscription,
        active: '',
         component: <Subscription />
    },
    {
        id: id++,
        text: 'Explore',
        icon: sideSvgs.explore,
        active: '',
         component: <Explore />
    },
    {
        id: id++,
        text: 'More',
        icon: sideSvgs.more,
        active: '',
         component: <More />
    },
] 