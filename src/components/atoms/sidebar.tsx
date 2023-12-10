import { atom } from "recoil";
import Dashboard from "../dashboard/Dashboard";

export const sideComps = atom({
    key: 'sideComps',
    default:  <Dashboard />
})