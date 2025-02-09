import React from "react";
const nextUrl = import.meta.env.MODE === "development"? import.meta.env.VITE_NEXT_URL_DEV:import.meta.env.VITE_NEXT_URL;
const Login = () => {
   window.location.href = nextUrl+"/login";
  return (
    <div></div>
  )
}

export default React.memo(Login)