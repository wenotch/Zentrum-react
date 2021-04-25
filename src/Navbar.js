import React from "react";

import Logo from "./images/zentrum-logo.svg";
import Menu from "./images/menuu.svg";
import useStyles from "./Navbar.css";

export default function Navbar() {
  const classes = useStyles();

  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <div class={classes.nav}>
      <img src={Logo} alt="" />
      <img src={Menu} alt="" />
    </div>
  );
}
