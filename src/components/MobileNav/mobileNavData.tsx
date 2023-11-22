import {
  IoHomeOutline,
  IoBarChartOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { CiCircleMore } from "react-icons/ci";
export const MobileNavData = [
  {
    icon: <IoHomeOutline id="icon" />,
    id: 1,
    text: "Home",
    active: "active",
    to: '/'
  },
  {
    icon: <IoBarChartOutline id="icon" />,
    id: 2,
    text: "Market",
    active: "",
    to: 'http://localhost:3000/market'
  },
  {
    icon: <IoPeopleOutline id="icon" />,
    id: 3,
    text: "Trader List",
    active: "",
    to: 'http://localhost:3000/traderlist'
  },
  {
    icon: <TbGridDots id="icon" />,
    id: 4,
    text: "Expore",
    active: "",
    to: 'http://localhost:3000/explore'
  },
  {
    icon: <CiCircleMore id="icon" />,
    id: 5,
    text: "More",
    active: "",
    to: 'http://localhost:3000/more',
  },
];
