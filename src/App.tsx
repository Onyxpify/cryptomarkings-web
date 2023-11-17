import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MobileNav from './components/MobileNav/MobileNav';

//lazy
const Market = lazy(() => import('./components/Market/Market'));
const Home = lazy(() => import('./components/Home/Home'));
const TraderList = lazy(()=> import('./components/TraderList/TraderList')) ;
const Explore = lazy(()=> import('./components/Explore/Explore')) ;
const More = lazy(()=> import('./components/More/More')) ;
const Error = lazy(()=> import('./components/error/Error')) ;
const Login = lazy(()=> import('./components/Login/Login')) ;
const Register = lazy(()=> import('./components/register/Register')) ;
const CoinSettings = lazy(() => import('./components/coinsettings/CoinSettings'));
function App() {
  let Path = useLocation();
  let noNav = ['/'];

  return (
    <div className="App">
      {
        !noNav.includes(Path.pathname) &&  <Navbar  />
     }
      <Suspense fallback={<div>Loading...</div>} >
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/market' element={<Market />} />
        <Route path='/traderlist' element={<TraderList />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/more' element={<More />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/coinsettings/:coin' element={<CoinSettings />} />
        <Route path='*' element={<Error />} />
      </Routes>
      </Suspense>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default App;
