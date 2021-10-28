import React from "react";
import useStyles from "./Mission.css";
import WaveTop from "./images/wave2.svg";
import WaveBom from "./images/wave3.svg";
function Mission() {
  const classes = useStyles();
  return (
    <>
      <img
        className={classes.img}
        src={WaveTop}
        id="mission"
        alt=""
        // style="margin-bottom: -4px; width: 100%; margin-top: 75px"
      />
      <div className={classes.mission}>
        <div className={classes.miss}>
          <h2>Our Vision</h2>
          <p>
            Our vision is a world where the tech talent workforce experience
            zero barrier to entry level jobs and failure rates of SMEs and
            startups are not due to their inability to afford quality tech
            talent.
          </p>
        </div>
        <div className={classes.miss} data-aos="fade-up">
          <h2>Our Mission</h2>
          <p>
            We are on a mission to disrupt the startus quo by proving that lack
            of experience does not necessarily mean lack of competence for
            talents and that small scale businesses deserve access to quality
            talents.
          </p>
        </div>
      </div>
      <img src={WaveBom} alt="" id="contact" className={classes.img} />
    </>
  );
}

export default Mission;
