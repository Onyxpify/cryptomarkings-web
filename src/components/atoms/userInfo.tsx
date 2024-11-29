import { atom } from "recoil";

export interface userInfoT {
    expires: number,
        token: string,
        user_id: number
  }

export let userInfo = atom<userInfoT>({
    key: 'userInfo',
    default: {
        expires: 0,
        token: '',
        user_id: 0
    }
})