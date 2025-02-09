import { lazy } from 'react';
const Explore = lazy(() => import("../../Explore/Explore"));
const NewMarket = lazy(() => import("../../newMarket/NewMarket"));
const More = lazy(() => import("../../More/More"));
const ApiBinding = lazy(() => import("../../apiBinding/ApiBinding"));
const Gem = lazy(() => import("../../gem/Gem"));
const Revenue = lazy(() => import("../../revenue/Revenue"));
const Rewards = lazy(() => import("../../rewards/Rewards"));
const Subscription = lazy(() => import("../../subscription/Subscription"));
const Dashboard = lazy(() => import("../Dashboard"));
const TraderList = lazy(() => import("../../TraderList/TraderList"));
import { sideSvgs } from "./sidebarSvgs";

var id = 0;
export const sideList = [
  {
    id: id++,
    text: "Dashboard",
    icon: sideSvgs.dashboard,
    active: "active",
    component: <Dashboard />,
  },
  {
    id: id++,
    text: "Trader List",
    icon: sideSvgs.traderlist,
    active: "",
    component: <TraderList />,
  },
  {
    id: id++,
    text: "Revenue",
    icon: sideSvgs.revenue,
    active: "",
    component: <Revenue />,
  },
  {
    id: id++,
    text: "GEM",
    icon: sideSvgs.gem,
    active: "",
    component: <Gem />,
  },
  {
    id: id++,
    text: "Market",
    icon: sideSvgs.market,
    active: "",
    component: <NewMarket />,
  },
  {
    id: id++,
    text: "Rewards",
    icon: sideSvgs.rewards,
    active: "",
    component: <Rewards />,
  },
  {
    id: id++,
    text: "API Bindings",
    icon: sideSvgs.api,
    active: "",
    component: <ApiBinding />,
  },
  {
    id: id++,
    text: "Subscription",
    icon: sideSvgs.subscription,
    active: "",
    component: <Subscription />,
  },
  {
    id: id++,
    text: "Explore",
    icon: sideSvgs.explore,
    active: "",
    component: <Explore />,
  },
  {
    id: id++,
    text: "More",
    icon: sideSvgs.more,
    active: "",
    component: <More />,
  },
];
