import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/yau-siu-loong-a89ba621a/"
        target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/yausiuloong" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
