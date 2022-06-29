import React from "react";
import "./portfolio.css";
import BTA from "../../assets/attendance.png";
import IOTA from "../../assets/heartfailure.jpg";
import DM from "../../assets/darkmode.jpeg";
import PF from "../../assets/portfolio.png";
import WEB from "../../assets/webby.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio_item">
          <div className="portfolio__item-image">
            <img src={BTA} alt="" />
          </div>
          <h3>
            Year Long Project - Bedside teaching attendance system (Mobile App)
          </h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio__item-image">
            <img src={IOTA} alt="" />
          </div>
          <h3>Final Year Project - Offline Patient system (Mobile App) </h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio__item-image">
            <img src={DM} alt="" />
          </div>
          <h3>
            Research Project - Automated Darkmode Generation (Machine Learning)
          </h3>
        </article>
        <article className="portfolio_item">
          <div className="portfolio__item-image">
            <img src={WEB} alt="" />
          </div>
          <h3>Simple Autentication system (Mobile App)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/yausiuloong/WebbyInterview"
              className="btn"
              target="_blank">
              GitHub
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio__item-image">
            <img src={PF} alt="" />
          </div>
          <h3>Personal Portfolio Website (Web App)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/yausiuloong/react-portfolio-website"
              className="btn"
              target="_blank">
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
