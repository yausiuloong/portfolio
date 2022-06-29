import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/2022.jpg";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      {/* BEM naming convention */}
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Alex Yau Siu Loong</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        {/* Contact and CV buttons */}
        <CTA />

        {/* Social medias */}
        <HeaderSocials />

        {/* Image  */}
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        {/* Scroll down  */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
