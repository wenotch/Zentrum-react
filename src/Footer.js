import React from "react";
import useStyles from "./Footer.css";
import WaveT from "./images/wave4.svg";
import facebook from "./images/face.svg";
import twit from "./images/twit.svg";
import ins from "./images/ins.svg";
import linkedin from "./images/link.svg";
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={WaveT} alt="" />
      <footer>
        <div className={classes.links}>
          <a href="https://www.privacypolicygenerator.info/live.php?token=9SAfc7AEYuxEFr42FqCemME2t9zlLjkU">
            Privacy Policy
          </a>
          <a href="/#">Terms and Conditions</a>
          <a href="/#">Support</a>

          <p>Copyright @ 2021 Zentrum. All rights reserved.</p>
        </div>
        <div className={classes.socials}>
          <div className={classes.soc}>
            <a href="https://www.facebook.com/Team-Zentrum-102822081393630/">
              <img src={facebook} alt="" />
            </a>
          </div>
          <div className={classes.soc}>
            <a href="/#">
              <img src={twit} alt="" />
            </a>
          </div>
          <div className={classes.soc}>
            <a href="https://www.instagram.com/zentrumit/">
              <img src={ins} alt="" />
            </a>
          </div>
          <div className={classes.soc}>
            <a href="https://www.linkedin.com/company/zentrum-tech">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
