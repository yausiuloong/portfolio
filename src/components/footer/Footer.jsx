import React from "react";
import "./footer.css";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ALEX YSL
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <ImFacebook />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alex Yau Siu Loong. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
