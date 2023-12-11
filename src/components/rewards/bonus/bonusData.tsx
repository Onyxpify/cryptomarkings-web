import { svgs } from "../../svgs";

let id = 0;
export const bonusCard = [
    {
        id: id++,
        icon: svgs.directRef,
        h3: `Direct Referral Bonus`,
        p1: `Earn 10% Direct referral bonus from your referrals.`,
        p2: ` Subscribe to a package in order to activate withdrawal for your received rewards from new referrals.`
    },
    {
        id: id++,
        icon: svgs.binaryBonus,
        h3: `Binary Reward`,
        p1: `New members sponsored by you are added to your right or left leg. All new members you invite after forming a binary tree are spilled over. `,
        p2: `Your Weekly binary reward cap is $50 . Upgrade your subscription to earn $2,000 binary cap weekly`
    },
    {
        id: id++,
        icon: svgs.leadership,
        h3: `Leadership Reward`,
        p1: `Earn a Percentage of your team’s fuel fee.`,
        p2: ``
    },
]