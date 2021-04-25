import React from "react";
import useStyles from "./Service.css";
function Service() {
  const classes = useStyles();
  return (
    <div class={classes.services}>
      <h1>Our Services</h1>
      <p>
        We provide ultra-affordable technology solutions to non-profits, SMEs
        and startups, at over 50% discount rates.
      </p>
    </div>
  );
}

export default Service;
