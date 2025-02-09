import exploreIcon from '../../assets/exploreIcon.svg';
import All from "./all/All";
import Faq from "./faq/Faq";
import Help from "./help/Help";


var id = 0;
export const exploreTab = [
    {
        id: id++,
        text: 'All',
        class: 'active',
        component: <All />,
    },
    {
        id: id++,
        text: 'FAQ',
        class: '',
         component: <Faq />,
    },
    {
        id: id++,
        text: 'Help',
        class: '',
         component: <Help />,
    },
]

var i = 0;
export const allData = [
    {
        id: i++,
        icon: exploreIcon,
        title: 'CryptoMarkings Fees Breakdown',
        text: `Lorem ipsum dolor sit amet consectetur. Magna proin at dictum facilisi auctor. Adipiscing ut facilisis diam cursus egestas integer. Amet nisl nunc neque lacus. Sed id sed urna purus nulla pharetra amet donec. Morbi facilisi nulla proin eu i`
    },
    {
        id: i++,
        icon: exploreIcon,
        title: 'CryptoMarkings Fees Breakdown',
        text: `Lorem ipsum dolor sit amet consectetur. Magna proin at dictum facilisi auctor. Adipiscing ut facilisis diam cursus egestas integer. Amet nisl nunc neque lacus. Sed id sed urna purus nulla pharetra amet donec. Morbi facilisi nulla proin eu i`
    },
    {
        id: i++,
        icon: exploreIcon,
        title: 'CryptoMarkings Fees Breakdown',
        text: `Lorem ipsum dolor sit amet consectetur. Magna proin at dictum facilisi auctor. Adipiscing ut facilisis diam cursus egestas integer. Amet nisl nunc neque lacus. Sed id sed urna purus nulla pharetra amet donec. Morbi facilisi nulla proin eu i`
    },
]