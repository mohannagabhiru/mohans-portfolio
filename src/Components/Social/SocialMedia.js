import React from "react";
import Styles from "./Social.module.css";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";


const Social = () => {
  return (
    <div className={Styles.socialMedia}>
      <a
        href="https://github.com/mohannagabhiru"
        target="github"
        title="Github"
      >
        <FiGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/mohan-nagabhiru/"
        target="linkedin"
        title="Linkedin"
      >
        <FiLinkedin />
      </a>
      <div className={Styles.socialLine}></div>
    </div>
  );
};

export default Social;
