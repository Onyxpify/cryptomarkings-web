import { atom } from "recoil";

export const hideSide = atom({
    key: 'hideSide',
    default: {class: '',comp: <></>},
})