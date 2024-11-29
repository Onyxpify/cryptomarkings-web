import React from "react";

const Login = () => {
   window.location.href = import.meta.env.VITE_NEXT_URL+"/login";
  return (
    <div></div>
  )
}

export default React.memo(Login)