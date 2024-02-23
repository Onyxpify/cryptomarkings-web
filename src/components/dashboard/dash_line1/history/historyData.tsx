import AdminFees from "./AdminFees/AdminFees";
import MyCopiersCommission from "./MyCopiersCommission/MyCopiersCommission";
import TraderCommission from "./TraderCommission/TraderCommission";


let id = 0;
export const historyTab = [
    {
        id: id++,
        text: 'Admin Fees',
        class: 'active',
        component: <AdminFees />,
    },
    {
        id: id++,
        text: 'Trader Commission',
        class: '',
         component: <TraderCommission />,
    },
    {
        id: id++,
        text: 'My Copiers Commission',
        class: '',
         component: <MyCopiersCommission />,
    },
]