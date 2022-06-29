import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      {/* bring us to the top of website ( HOME) */}
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>

      {/* About icon */}
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>

      {/* Experience icon */}
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}>
        <BsTools />
      </a>

      {/* Portfolio  */}
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}>
        <RiServiceLine />
      </a>

      {/* Contact */}
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
