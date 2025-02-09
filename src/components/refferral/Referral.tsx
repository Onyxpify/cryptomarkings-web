import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import Loading from "../loading/Loading";
const nextUrl = import.meta.env.MODE === "development"? import.meta.env.VITE_NEXT_URL_DEV:import.meta.env.VITE_NEXT_URL;
const Referral = () => {
    let {username} = useParams();
    useEffect(()=> {
        window.location.href = nextUrl+"/register/referral/"+username;
    },[])
  return (
   <Loading />
  )
}

export default React.memo(Referral)