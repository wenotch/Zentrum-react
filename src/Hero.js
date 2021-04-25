import React from "react";
import HeroImg from "./images/zentrum-background.svg";
import useStyles from "./Hero.css";

export default function Hero() {
  const classes = useStyles();
  return (
    <>
      <div class={classes.hero}>
        <div className={classes.imgDiv}>
          {" "}
          <img src={HeroImg} alt="" />
        </div>
        <div class={classes.heroText}>
          <h1 className={classes.heroHeader}>
            We make quality tech talents{" "}
            <span className={classes.heroHeaderColor}>ultra</span>- affordable.
          </h1>
          <p className={classes.heroP}>
            Technology talents need jobs; small businesses need quality talent.
            We bridge this gap.
          </p>
        </div>
      </div>
      <section id="about" className={classes.section}>
        <div class={classes.wave}></div>
      </section>
    </>
  );
}
