import NewCenturion from "./newCenturion/NewCenturion";
import NewKnight from "./newKnight/NewKnight";
import NewManual from "./newManual/NewManual";


let id = 0;
export const marketTab = [
    {
        id: id++,
        text: 'Manual',
        class: 'active',
        component: <NewManual />,
    },
    {
        id: id++,
        text: 'Knight Robot',
        class: '',
         component: <NewKnight />,
    },
    {
        id: id++,
        text: 'Centurion Robot',
        class: '',
         component: <NewCenturion />,
    },
]