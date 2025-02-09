"use client";
import React from "react";
import { RecoilRoot } from "recoil";
interface p{
  children:any,
}
const RecoilContextProvider = ({ children }:p) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
export default RecoilContextProvider;