import React from "react";
import useStyles from "./About.css";
import Zentrum from "./images/zentrum-about.svg";

import Img1 from "./images/sicon1.svg";
import Img2 from "./images/sicon2.svg";
import Img3 from "./images/sicon3.svg";
import Img4 from "./images/sicon4.svg";

function About() {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <div className={classes.firstSide}>
      <img src={Zentrum} alt="" />
      <h1>
        About <span>Zentrum Tech School</span>
      </h1>
      <p>
        At Zentrum Tech School, we groom the next generation of technology
        leaders through and industry-integrated virtual training program.
      </p>
      <div className={classes.features}>
        <div className={classes.feature} data-aos="fade-up">
          <div className={classes.lefti}>
            <img src={Img1} alt="" />
            <div className={classes.height}></div>
          </div>

          <div className={classes.righti}>
            <h2>Real-World Experience</h2>
            <p>
              Our talents gain on-the-job experience by working on real-world
              client projects. They gain the skills and competence to solve
              real-world problems.
            </p>
          </div>
        </div>
        <div className={classes.feature} data-aos="fade-up">
          <div className={classes.lefti}>
            <img src={Img2} alt="" />
            <div className={classes.height}></div>
          </div>

          <div className={classes.righti}>
            <h2>Long-term mentorship</h2>
            <p>
              Talents receive long-term mentorship, support and career advice
              from tech industry experts while working on real-world projects.
            </p>
          </div>
        </div>
        <div className={classes.feature} data-aos="fade-up">
          <div className={classes.lefti}>
            <img src={Img3} alt="" />
            <div className={classes.height}></div>
          </div>

          <div className={classes.righti}>
            <h2>Portfolio Development</h2>
            <p>
              Towards the end of the training, talents develop their portfolio
              following a framework co-designed by industry leaders.
            </p>
          </div>
        </div>
        <div className={classes.feature} data-aos="fade-up">
          <div className={classes.lefti}>
            <img src={Img4} alt="" />
            {/* <!-- <div class="height"></div> --> */}
          </div>

          <div className={classes.righti}>
            <h2>Job Matching</h2>
            <p>
              At the end of our training, upskilled tech talents get matched to
              job opportunities with recommendations both locally and globally.
            </p>
          </div>
        </div>
      </div>{" "}
      </div>
    </div>
  );
}

export default About;
