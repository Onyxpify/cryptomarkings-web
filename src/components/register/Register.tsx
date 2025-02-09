import React from "react";
const nextUrl = import.meta.env.MODE === "development"? import.meta.env.VITE_NEXT_URL_DEV:import.meta.env.VITE_NEXT_URL;
const Register = () => {
   window.location.href = nextUrl+"/register";
  return (
    <div></div>
  )
}

export default React.memo(Register)