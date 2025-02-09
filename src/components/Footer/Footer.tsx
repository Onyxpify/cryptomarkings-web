import Link from 'next/link'
import './footer.scss'
import { FaFacebook,FaInstagram, FaGithub,} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import ScrollX from '../Home/scrollX/ScrollX';

const Footer = () => {
  return (
    <ScrollX className='Footer'>
      <div className="boxa box">
        <div className="img"></div>
        <div className="icons">
            <Link href={'#'}><AiFillTwitterCircle /> </Link>
          <Link href={'#'}><FaFacebook /> </Link>
          <Link href={'#'}><FaInstagram /> </Link>
          <Link href={'#'}><FaGithub /> </Link>
        </div>
      </div>
      <div className="boxb box">
        <h3>Company</h3>
        <div className="linkes">
           <Link href={'#'}>About</Link>
        <Link href={'#'}>Features</Link>
        <Link href={'#'}>Work</Link>
        <Link href={'#'}>Career</Link>
       </div>
      </div>
      <div className="boxc box">
        <h3>Help</h3>
        <div className="linkes">
          <Link href={'#'}>Customer Support</Link>
        <Link href={'#'}>FAQ</Link>
        <Link href={'#'}>Terms & Conditions</Link>
        <Link href={'#'}>Privacy Policy</Link>
        </div>
      </div>
      <div className="boxd box">
        <h3>Resources</h3>
        <div className="linkes">
           <Link href={'#'}>Development Tutorials</Link>
        <Link href={'#'}>Blog</Link>
        <Link href={'#'}>News</Link>
        <Link href={'#'}>Crypto Prices</Link>
        </div>
      </div>
    </ScrollX>
  )
}

export default Footer