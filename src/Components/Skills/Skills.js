import React from "react";
import Styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section_heading">
        <h1>
          <span>My Skills</span>
        </h1>
      </div>

      <div className={Styles.skills}>
        <div className={Styles.skills_top}>
          <div className={Styles.skills_top_left}>
            <div>
              <label htmlFor="JavaScript">JavaScript</label>
              <div className={Styles.range_background}>
                <div style={{ width: "97%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="ReactJS">ReactJS</label>
              <div className={Styles.range_background}>
                <div style={{ width: "90%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="Python">HTML/CSS</label>
              <div className={Styles.range_background}>
                <div style={{ width: "95%" }}></div>
              </div>
            </div>
           
          </div>

          <div className={Styles.skills_top_right}>
            <div>
              <label htmlFor="React Native">React Native</label>
              <div className={Styles.range_background}>
                <div style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="Firebase">Firebase</label>
              <div className={Styles.range_background}>
                <div style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.skills_bottom}>
          <h2>Some of the Tools and Practices I use in my development are:</h2>
          <div className={Styles.skills_bottom_division}>
            <div>
              <li>Git</li>
              <li>VScode</li>
              <li>Chrome DevTools</li>
              <li>Responsive web-design</li>
            </div>
            <div>
              <li>Material UI</li>
              <li>Github</li>
              <li>RNUI</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
