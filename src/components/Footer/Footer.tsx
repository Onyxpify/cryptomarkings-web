import "./footer.scss";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import ScrollX from "../scrollX/ScrollX";
import { Link } from "react-router-dom";
interface p {
  bg?: string;
  color?: string;
}
const Footer = ({ bg, color }: p) => {
  return (
    <ScrollX bg={bg} color={color} className="FooTer">
      <div style={{ backgroundColor: bg }} className="line1">
        <div className="boxa _box">
          <div className="img"></div>
          <div className="icons">
            <Link to={"#"}>
              <AiFillTwitterCircle />{" "}
            </Link>
            <Link to={"#"}>
              <FaFacebook />{" "}
            </Link>
            <Link to={"#"}>
              <FaInstagram />{" "}
            </Link>
            <Link to={"#"}>
              <FaGithub />{" "}
            </Link>
          </div>
        </div>
        <div className="boxb _box">
          <h3>Company</h3>
          <div className="linkes">
            <Link to={"#"}>About</Link>
            <Link to={"#"}>Features</Link>
            <Link to={"#"}>Work</Link>
            <Link to={"#"}>Career</Link>
          </div>
        </div>
        <div className="boxc _box">
          <h3>Help</h3>
          <div className="linkes">
            <Link to={"#"}>Customer Support</Link>
            <Link to={"#"}>FAQ</Link>
            <Link to={"#"}>Terms & Conditions</Link>
            <Link to={"#"}>Privacy Policy</Link>
          </div>
        </div>
        <div className="boxd _box">
          <h3>Resources</h3>
          <div className="linkes">
            <Link to={"#"}>Development Tutorials</Link>
            <Link to={"#"}>Blog</Link>
            <Link to={"#"}>News</Link>
            <Link to={"#"}>Crypto Prices</Link>
          </div>
        </div>
      </div>
      <div className="line2">
        <p>
          © Copyright {String(new Date().toDateString()).split(" ")[3]}, All
          Rights Reserved CryptoMarkings
        </p>
      </div>
    </ScrollX>
  );
};

export default Footer;
