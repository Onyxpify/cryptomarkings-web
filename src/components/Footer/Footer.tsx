import Link from 'next/link'
import './footer.scss'
import { FaFacebook,FaInstagram, FaTelegram,} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import ScrollX from '../Home/scrollX/ScrollX';

const Footer = () => {
  return (
    <ScrollX  className='Footer'>
      <div id='Footer' className="boxa box">
        <div className="img"></div>
        <div className="icons">
            <Link target='_blank' href={'https://x.com/blacktinumai'}><AiFillTwitterCircle /> </Link>
          <Link target='_blank' href={'https://www.facebook.com/profile.php?id=61573305990373'}><FaFacebook /> </Link>
          <Link target='_blank' href={'https://www.instagram.com/blacktinum_'}><FaInstagram /> </Link>
          <Link target='_blank' href={'https://t.me/blacktinum'}><FaTelegram /> </Link>
        </div>
      </div>
      <div className="boxb box">
        <h3>Company</h3>
        <div className="linkes">
           <Link href={'#AboutUs'}>About</Link>
        <Link href={'#Footer'}>Features</Link>
        <Link href={'#Footer'}>Work</Link>
        <Link href={'#Footer'}>Career</Link>
       </div>
      </div>
      <div className="boxc box">
        <h3>Help</h3>
        <div className="linkes">
          <Link href={'#Footer'}>Customer Support</Link>
        <Link href={'#Faq'}>FAQ</Link>
        <Link href={'#Footer'}>Terms & Conditions</Link>
        <Link href={'#Footer'}>Privacy Policy</Link>
        </div>
      </div>
      <div className="boxd box">
        <h3>Resources</h3>
        <div className="linkes">
           <Link href={'#Footer'}>Development Tutorials</Link>
        <Link href={'#Footer'}>Blog</Link>
        <Link href={'#Footer'}>News</Link>
        <Link href={'#Footer'}>Crypto Prices</Link>
        </div>
      </div>
    </ScrollX>
  )
}

export default Footer