import React from "react";

const Register = () => {
   window.location.href = import.meta.env.VITE_NEXT_URL+"/register";
  return (
    <div></div>
  )
}

export default React.memo(Register)