// Define the interface for the nav data object
export interface navDataType {
  id: number;
  text: string;
  active: string;
  to: string ; // 'to' can be either a string or a URL object
  class: string;
}

// Define the NavData array with the interface
export const NavData: Array<navDataType> = [
  {
    id: 1,
    text: "Home",
    active: "active",
    to: '/',
    class: 'home'
  },
  {
    id: 6,
    text: "Register",
    active: "",
    to: 'https://register.blacktinum.io/',
    class: 'register'
  },
];
