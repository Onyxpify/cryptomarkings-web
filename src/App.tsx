
import  { Suspense, lazy, } from 'react';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import logo from '/blockvilla.svg'
import Loading from './components/loading/Loading';

//lazy
const Market = lazy(() => import('./components/Market/Market'));
const Referral = lazy(() => import('./components/refferral/Referral'));
const Home = lazy(() => import('./components/Home/Home'));
const TraderList = lazy(()=> import('./components/TraderList/TraderList')) ;
const Explore = lazy(()=> import('./components/Explore/Explore')) ;
const More = lazy(()=> import('./components/More/More')) ;
const Error = lazy(()=> import('./components/error/Error')) ;
const Login = lazy(()=> import('./components/Login/Login')) ;
const Register = lazy(()=> import('./components/register/Register')) ;
const CoinSettings = lazy(() => import('./components/coinsettings/CoinSettings'));
const DashLayout = lazy(() => import('./components/dashboard/dashLayout/DashLayout'));

const App = () => { 
  // const [open, setOpen] = useState(false); 
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const Path = useLocation();
  const noNav = ['/','/dashboard'];
  // const noFooter = ['/dashboard'];

  return (
    <div className="App">
      {
        !noNav.includes(Path.pathname) &&  <Navbar  />
     }
      <Suspense fallback={<Loading logo={logo} />} >
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/market' element={<Market />} />
        <Route path='/traderlist' element={<TraderList />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/more' element={<More />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<DashLayout />} />
        <Route path='/register' element={<Register />} />
        <Route path='/coinsettings/:coin' element={<CoinSettings />} />
        <Route path='/referral/:username' element={<Referral />} />
        <Route path='*' element={<Error />} />
      </Routes>
      </Suspense>
       {
        !noNav.includes(Path.pathname) &&  <Footer />
     }
      
      {/* <MobileNav /> */}
    </div>
  );
}

export default App;
