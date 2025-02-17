import React from "react";
import Styles from "./Hero.module.css";

import MohanLatest from "../../assets/MohanLatest.pdf";
import heroPic from "../../assets/heroPic.gif";
import link from "../../utils/Links";

console.log("link", link);

const Hero = () => {
  return (
    <section id="home" className="section">
      <div className={Styles.hero}>
        <div className={Styles.hero_left}>
          <h3>Hello World,</h3>
          <h4>My name is,</h4>
          <h1>Mohan Govind Chiranjeevi Nagabhiru</h1>
          <h2>I Write Code for Internet. </h2>
          <p>
            A Frontend Engineer with a strong Foundation in Technology and
            Frameworks of today's Standards like  <span> JavaScript</span>,  <span>React</span>, <span>React Native</span>, <span>Firebase</span>,
            etc. <br /> <br /> I heartily enjoy
            Building websites and web applications with attention to detail
          </p>

          <div className={Styles.buttons}>
            <a href={link} className="button">
              Resume
            </a>
          </div>
        </div>

        <div className={Styles.hero_right}>
          <img src={heroPic} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
