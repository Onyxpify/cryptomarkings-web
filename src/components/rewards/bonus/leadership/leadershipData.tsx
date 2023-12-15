import earl from "../../../../assets/earl.svg";
import user4 from "../../../../assets/user4.svg";
import barcon from "../../../../assets/barcon.svg";
import viscount from "../../../../assets/viscount.svg";
import duke from "../../../../assets/duke.svg";
import prince from "../../../../assets/prince.svg";
import king from "../../../../assets/king.svg";
import user1 from '../../../../assets/user1.svg';
import user2 from '../../../../assets/user2.svg';
import user3 from '../../../../assets/user3.svg';


export const currentRank = {
  icon: earl,
  reward: "5%",
  iconName: "Earl",
  level: 3,
  progress: "50%",
};

let id = 0;
export const topReferrals = [
    {
        id: id++,
        icon: user4,
        name: '@Igbolabi',
        rate: '5%',
        level: 3,
    },
    {
        id: id++,
        icon: user4,
        name: '@Igbolabi',
        rate: '5%',
        level: 3,
    },
    {
        id: id++,
        icon: user4,
        name: '@Igbolabi',
        rate: '5%',
        level: 3,
    },
]

let i = 0;
export const leadershipRank = [
     {
        id: i++,
        icon: barcon,
        name: 'Barcon',
        rate: '20%',
        level: 1,
        state: 'inactive'
    },
     {
        id: i++,
        icon: viscount,
        name: 'Viscount',
        rate: '20%',
        level: 2,
        state: 'inactive'
    },
     {
        id: i++,
        icon: earl,
        name: 'Earl',
        rate: '5%',
        level: 3,
        state: 'active'
    },
     {
        id: i++,
        icon: duke,
        name: 'Duke',
        rate: '5%',
        level: 4,
        state: 'inactive'
    },
     {
        id: i++,
        icon: prince,
        name: 'Prince',
        rate: '3%',
        level: 5,
        state: 'inactive'
    },
     {
        id: i++,
        icon: king,
        name: 'King',
        rate: '2%',
        level: 6,
        state: 'inactive'
    },
]


let j = 0;
export const leadershipTable = [
    {
        id: j++,
        class: 'header',
        cell1: {icon: false, text: 'Username'  },
        cell2: {icon: false, text: 'Date'  },
        cell3: {icon: false, text: 'Amount'  },
        cell4: {icon: false, text: 'Maturity'  },
    },
    {
        id: j++,
        class: 'row row1',
        cell1: {icon: user1, text: 'Igbo'  },
        cell2: {icon: false, text: '11/04/23'  },
        cell3: {icon: false, text: '$0.04623'  },
        cell4: {icon: false, text: '12/04/23'  },
    },
    {
        id: j++,
        class: 'row row2',
        cell1: {icon: user2, text: 'Igbo'  },
        cell2: {icon: false, text: '11/04/23'  },
        cell3: {icon: false, text: '$0.04623'  },
        cell4: {icon: false, text: '12/04/23'  },
    },
    {
        id: j++,
        class: 'row row3',
        cell1: {icon: user3, text: 'Igbo'  },
        cell2: {icon: false, text: '11/04/23'  },
        cell3: {icon: false, text: '$0.04623'  },
        cell4: {icon: false, text: '12/04/23'  },
    },
    {
        id: j++,
        class: 'row row4',
        cell1: {icon: user1, text: 'Igbo'  },
        cell2: {icon: false, text: '11/04/23'  },
        cell3: {icon: false, text: '$0.04623'  },
        cell4: {icon: false, text: '12/04/23'  },
    },
    {
        id: j++,
        class: 'row row5',
        cell1: {icon: user2, text: 'Igbo'  },
        cell2: {icon: false, text: '11/04/23'  },
        cell3: {icon: false, text: '$0.04623'  },
        cell4: {icon: false, text: '12/04/23'  },
    },
    {
        id: j++,
        class: 'row row6',
        cell1: {icon: user3, text: 'Igbo'  },
        cell2: {icon: false, text: '11/04/23'  },
        cell3: {icon: false, text: '$0.04623'  },
        cell4: {icon: false, text: '12/04/23'  },
    },
    {
        id: j++,
        class: 'row row7',
        cell1: {icon: user2, text: 'Igbo'  },
        cell2: {icon: false, text: '11/04/23'  },
        cell3: {icon: false, text: '$0.04623'  },
        cell4: {icon: false, text: '12/04/23'  },
    },
    {
        id: j++,
        class: 'row row8',
        cell1: {icon: user3, text: 'Igbo'  },
        cell2: {icon: false, text: '11/04/23'  },
        cell3: {icon: false, text: '$0.04623'  },
        cell4: {icon: false, text: '12/04/23'  },
    },
]