import All from "./All/All";
import Failed from "./failed/Failed";
import Pending from "./pending/Pending";

let id = 0;
export const historyTab = [
    {
        id: id++,
        text: 'All',
        class: 'active',
        component: <All />,
    },
    {
        id: id++,
        text: 'Pending',
        class: '',
         component: <Pending />,
    },
    {
        id: id++,
        text: 'Failed',
        class: '',
         component: <Failed />,
    },
]