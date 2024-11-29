const reactUrl = process.env.NEXT_PUBLIC_reactUrl
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
      to: reactUrl+'/dashboard',
    class: 'market'
  },
  {
    id: 3,
    text: "Trader List",
    active: "",
      to: reactUrl+'/dashboard',
    class: 'traderlist'
  },
  {
    id: 4,
    text: "Expore",
    active: "",
      to: reactUrl+'/dashboard',
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