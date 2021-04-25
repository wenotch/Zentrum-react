import React from "react";
import Icon1 from "./images/icon1.svg";
import Icon2 from "./images/icon2.svg";
import Icon3 from "./images/icon3.svg";

import useStyles from "./Request.css";
function Request() {
  const classes = useStyles();
  return (
    <div className={classes.request}>
      <div className={`${classes.web} ${classes.tek}`} data-aos="fade-up">
        <div className={classes.imgreg}>
          <img src={Icon1} alt="" />
        </div>
        <div className={classes.textReq}>
          <h1>Website Design and Development</h1>
        </div>
        <div className={classes.buttonReq}>
          <a href="/web-development-job-request">Request a job</a>
        </div>
      </div>
      <div
        className={`${classes.app} ${classes.tek}`}
        
        data-aos="fade-up"
      >
        <div className={classes.imgReg}>
          <img src={Icon2} alt="" />
        </div>
        <div className={classes.textReq}>
          <h1>Mobile App Design and Development</h1>
        </div>
        <div className={classes.buttonReq}>
          <a href="/mobile-app-job-request">Request a job</a>
        </div>
      </div>
      <div className={classes.scoop}></div>
      <div class={`${classes.school} ${classes.tek}`} data-aos="fade-up">
        <div className={classes.imgReg}>
          <img src={Icon3} alt="" />
        </div>
        <div className={classes.textReq}>
          <h1>Zentrum Tech School</h1>
          <p>
            Are you a talented web developer, UI/UX Designer, or Mobile
            Developer still struggling to get your first gig?
            <span>We've got you!</span>
          </p>
        </div>

        <div className={classes.buttonReq}>
          <a href="/zentrum-school">Apply today!</a>
        </div>
      </div>
    </div>
  );
}

export default Request;
