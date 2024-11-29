import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import Loading from "../loading/Loading";

const Referral = () => {
    let {username} = useParams();
    useEffect(()=> {
        window.location.href = import.meta.env.VITE_nextUrl+"/register/referral/"+username;
    },[])
  return (
   <Loading />
  )
}

export default React.memo(Referral)