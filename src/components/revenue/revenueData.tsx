import Dollar from "./Dollar";
import Percent from "./Percent";

export const tab = [
    {
      id: 1,
      text: 'Change to $',
      bg: 'bg-sec',
      color: 'text-pri',
      component: <Dollar />
    },
    {
        id: 2,
        text: 'Change to %',
        color: 'text-bodyText',
      bg: 'bg-white',
      component: <Percent />
    },
  ]