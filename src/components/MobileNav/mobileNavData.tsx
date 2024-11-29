import {
  IoHomeOutline,
  IoBarChartOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { CiCircleMore } from "react-icons/ci";
const reactUrl = process.env.NEXT_PUBLIC_reactUrl
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
    to: reactUrl+'/dashboard'
  },
  {
    icon: <IoPeopleOutline id="icon" />,
    id: 3,
    text: "Trader List",
    active: "",
    to: reactUrl+'/dashboard'
  },
  {
    icon: <TbGridDots id="icon" />,
    id: 4,
    text: "Expore",
    active: "",
    to: reactUrl+'/dashboard'
  },
  {
    icon: <CiCircleMore id="icon" />,
    id: 5,
    text: "More",
    active: "",
    to: reactUrl+'/dashboard',
  },
];
