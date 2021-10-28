import { makeStyles } from "@material-ui/core/styles";
import AboutImg from "./images/sss.svg";

const useStyles = makeStyles((theme) => ({
  about: {
    width: "100%",
    padding: "0 25px",
    textAlign: "center",
    backgroundImage: `url(${AboutImg})`,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    "@media only screen and (min-width: 768px)": {
      padding: "20px 150px 50px",
      // display: "flex",
      width: "50%",
      margin: "auto",
    },

    "& h1": {
      fontSize: "38px",
      fontFamily: "milliardbook",
      color: "#7b007b",
      textAlign: "left",
      margin: "30px auto 13px",
      "& span": {
        color: "#e8b200",
      },
    },

    "& p ": {
      textAlign: "left",
      lineHeight: "30px",
      fontFamily: "milliardbook",
      color: "#49414a",
    },
  },

  height: {
    width: "8px",
    backgroundColor: "#efcafc",
    height: "160px",
    marginLeft: "27px",
    "@media only screen and (min-width: 768px)": {
      height: "60px",
    },
  },
  lefti: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    "& img": {
      width: "62px",
    },
  },
  features: {
    marginTop: "40px",
  },
  feature: {
    display: "flex",
    flexDirection: "row",
  },

  righti: {
    paddingLeft: "11px",

    "& h2": {
      fontSize: "19px",
      fontFamily: "milliardsemibold",
      color: "#7b007b",
      textAlign: "left",
    },
    "& p": {
      fontSize: "16px",
      fontFamily: "milliardbook",
      color: "#49414a",
      lineHeight: "30px",
      textAlign: "left",
    },
  },
}));

export default useStyles;
