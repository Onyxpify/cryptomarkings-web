import NewCenturion from "./newCenturion/NewCenturion";
import NewKnight from "./newKnight/NewKnight";
import NewManual from "./newManual/NewManual";


var id = 0;
export const marketTab = [
    {
        id: id++,
        text: 'Manual',
        bg: 'bg-sec',
        color: 'text-pri',
        component: <NewManual />,
    },
    {
        id: id++,
        text: 'Knight Robot',
      color: 'text-bodyText',
      bg: 'bg-white',
      component: <NewKnight />,
    },
    {
        id: id++,
        text: 'Centurion Robot',
        bg: 'bg-white',
        color: 'text-bodyText',
         component: <NewCenturion />,
    },
]