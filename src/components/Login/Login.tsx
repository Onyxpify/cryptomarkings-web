import React from "react";

const Login = () => {
   window.location.href = import.meta.env.VITE_nextUrl+"/login";
  return (
    <div></div>
  )
}

export default React.memo(Login)