import React from "react";

const Home = () => {
  window.location.href = import.meta.env.VITE_nextUrl+"/";
  return (
    <div>
      
    </div>
  )
}

export default React.memo(Home)