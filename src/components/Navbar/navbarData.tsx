const REACT_URL = process.env.NEXT_PUBLIC_REACT_URL
export const NavData = [
  {
    id: 1,
    text: "Home",
    active: "active",
    to: '/',
    class: 'home'
  },
  {
    id: 2,
    text: "Market",
    active: "",
      to: REACT_URL+'/dashboard',
    class: 'market'
  },
  {
    id: 3,
    text: "Trader List",
    active: "",
      to: REACT_URL+'/dashboard',
    class: 'traderlist'
  },
  {
    id: 4,
    text: "Expore",
    active: "",
      to: REACT_URL+'/dashboard',
    class: 'explore'
  },
  {
    id: 5,
    text: "Log in",
    active: "",
      to: '/login',
    class: 'login'
    
  },
  {
    id: 6,
    text: "Register",
    active: "",
      to: '/register',
    class: 'register'
  },
  
];