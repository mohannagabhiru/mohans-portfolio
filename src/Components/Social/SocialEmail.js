import React from "react";
import Styles from "./Social.module.css";

const SocialEmail = () => {
  return (
    <div className={Styles.socialEmail}>
      <a href="mailto:mohannagabhiru@gmail.com" title="Send Email">
        mohannagabhiru@gmail.com
      </a>
      <div className={Styles.emailLine}></div>
    </div>
  );
};

export default SocialEmail;
