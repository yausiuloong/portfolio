import React from "react";
import "./about.css";
import ME from "../../assets/27f2af99-8175-487a-a393-a02f6b5f715f.jpg";
import { FaUniversity, FaAward } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About ME</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" />
        </div>

        {/* This is for my content */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>University</h5>
              <small>Monash University Software Engineering</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Worked on various fullstack projects</small>
            </article>
            <article className="about__card">
              <VscDebugConsole className="about__icon" />
              <h5>Skills</h5>
              <small>Familiar with 10+ Languages & Frameworks</small>
            </article>
          </div>
          <p className="p1">
            Fresh graduate student from Monash University Malaysia with
            bachelor's degree in Software Engineering. Highly experience in full
            stack development. Competent in data analytics and data processing
            for big data. Have strong background on data structures, algorithms
            and SQL database concepts.
          </p>

          <p className="p2">
            During my free time, I can be found in the gym, constantly improving
            myself.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      {/* For image */}
    </section>
  );
};

export default About;
