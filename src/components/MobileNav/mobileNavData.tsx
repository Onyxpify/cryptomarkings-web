import {
  IoHomeOutline,
  IoBarChartOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { CiCircleMore } from "react-icons/ci";
const REACT_URL = process.env.NEXT_PUBLIC_REACT_URL
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
    to: REACT_URL+'/dashboard'
  },
  {
    icon: <IoPeopleOutline id="icon" />,
    id: 3,
    text: "Trader List",
    active: "",
    to: REACT_URL+'/dashboard'
  },
  {
    icon: <TbGridDots id="icon" />,
    id: 4,
    text: "Expore",
    active: "",
    to: REACT_URL+'/dashboard'
  },
  {
    icon: <CiCircleMore id="icon" />,
    id: 5,
    text: "More",
    active: "",
    to: REACT_URL+'/dashboard',
  },
];
