import { atom } from "recoil";


export interface usernameT {
        username: string,
  }
export const usernameAtom = atom<usernameT>({
    key: 'usernameAtom',
    default: {
        username: ''
    }
})