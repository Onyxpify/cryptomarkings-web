import Centurion from "./centurion/Centurion";
import Knight from "./knight/Knight";
import Manual from "./manual/Manual";

export const marketTabs = [
    {
        id: 1,
        text: 'Manual',
        component: <Manual />,
        active: 'active',
    },
    {
        id: 2,
        text: 'Knight Robot',
        component: <Knight />,
        active: '',
    },
    {
        id: 3,
        text: 'Centurion Robot',
        component: <Centurion />,
        active: '',
    }
]