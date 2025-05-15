import Link from 'next/link'
import { FaFacebook,FaInstagram, FaTelegram,} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full bg-[#003d2b] text-white py-8 px-4 mt-8 rounded-t-2xl shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
        {/* Logo & Socials */}
        <div className="flex flex-col items-center md:items-start gap-4 md:w-1/4">
          <div className="w-32 h-20 bg-[url('/png/Logo4.png')] bg-contain bg-no-repeat mb-2" />
          <div className="flex gap-3 text-2xl">
            <Link target='_blank' href={'https://x.com/blacktinumai'} className="hover:text-[#95cea5] transition"><AiFillTwitterCircle /></Link>
            <Link target='_blank' href={'https://www.facebook.com/profile.php?id=61573305990373'} className="hover:text-[#95cea5] transition"><FaFacebook /></Link>
            <Link target='_blank' href={'https://www.instagram.com/blacktinum_'} className="hover:text-[#95cea5] transition"><FaInstagram /></Link>
            <Link target='_blank' href={'https://t.me/blacktinum'} className="hover:text-[#95cea5] transition"><FaTelegram /></Link>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-8 flex-1 mt-8 md:mt-0">
          <div className="min-w-[120px]">
            <h3 className="text-[#95cea5] text-base font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href={'#AboutUs'} className="hover:text-[#95cea5] transition">About</Link></li>
              <li><Link href={'#Offers'} className="hover:text-[#95cea5] transition">Features</Link></li>
              <li><Link href={'#JoinUs'} className="hover:text-[#95cea5] transition">Work</Link></li>
              <li><a href="mailto:careers@blacktinum.io" className="hover:text-[#95cea5] transition">Career</a></li>
            </ul>
          </div>
          <div className="min-w-[120px]">
            <h3 className="text-[#95cea5] text-base font-semibold mb-2">Help</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="mailto:support@blacktinum.io" className="hover:text-[#95cea5] transition">Customer Support</a></li>
              <li><Link href={'#Faq'} className="hover:text-[#95cea5] transition">FAQ</Link></li>
              <li><Link href={'/terms'} className="hover:text-[#95cea5] transition">Terms & Conditions</Link></li>
              <li><Link href={'/privacy'} className="hover:text-[#95cea5] transition">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="min-w-[120px]">
            <h3 className="text-[#95cea5] text-base font-semibold mb-2">Resources</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href={'#Offers'} className="hover:text-[#95cea5] transition">Development Tutorials</Link></li>
              <li><Link href={'#Informed'} className="hover:text-[#95cea5] transition">Blog</Link></li>
              <li><Link href={'#Informed'} className="hover:text-[#95cea5] transition">News</Link></li>
              <li><Link href={'#Offers'} className="hover:text-[#95cea5] transition">Crypto Prices</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#95cea5]/20 mt-8 pt-4 text-xs text-center text-[#95cea5]">&copy; {new Date().getFullYear()} Blacktinum. All rights reserved.</div>
    </footer>
  )
}

export default Footer