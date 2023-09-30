import { Link } from "react-router-dom";
import { HeaderData } from "../../data/dataLink";
import "./Header.css";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import DarkMode from "../DarkMode/DarkMode";

const Header = () => {
  let [toggleNav, setToggleNav] = useState(true);
  return (
    <header>
      <div className="logo">Crypto</div>
      <AiOutlineMenu
        className="navMenu"
        size={25}
        onClick={() => setToggleNav(false)}
      />
      <nav className={`${toggleNav ? "closeNav" : ""}`}>
        <AiOutlineClose
          className="navClose"
          size={25}
          onClick={() => setToggleNav(true)}
        />

        <ul>
          {HeaderData.map((link) => {
            return (
              <li key={link.title}>
                <Link to={link.to}>{link.title}</Link>
              </li>
            );
          })}
          <li>
            <DarkMode />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
