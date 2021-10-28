import { makeStyles } from "@material-ui/core/styles";
import SchoolImg from "./images/school.svg";
import AppImg from "./images/app.svg";
import WebImg from "./images/web.svg";
const useStyles = makeStyles((theme) => ({
  request: {
    padding: " 0 25px 60px",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    "@media only screen and (min-width: 768px)": {
      flexDirection: "row",
      padding: "20px 150px",
      justifyContent: "space-between",
    },
  },

  scoop: {
    height: "78px",
    "@media only screen and (min-width: 768px)": {
      display: "none",
    },
  },
  tek: {
    width: "100%",

    textAlign: "center",
    backgroundColor: "#8e028e",
    borderRadius: "8px",
    marginBottom: "58px",
    "@media only screen and (min-width: 768px)": {
      width: "330px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "0",
    },
    "& h1": {
      color: "#fff",
      fontSize: "26px",
      fontFamily: "milliardsemibold",
      width: "100%",
      margin: "12px auto 21px",
    },
    "& p": {
      fontFamily: "milliardbook",
      color: "#fff",
      textAlign: "left",
      marginBottom: "20px",
      fontSize: "18px",
      lineHeight: "30px",
      "& span": {
        fontSize: "18px",
        fontFamily: "milliardbold",
      },
    },
  },

  web: {
    backgroundImage: `url(${WebImg})`,
    padding: "49px 30px 41px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  app: {
    padding: "49px 10px 41px",
    backgroundImage: `url(${AppImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    marginBottom: "0",
  },
  school: {
    padding: "49px 30px 41px",
    backgroundImage: `url(${SchoolImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    "& h1": {
      margin: "12px auto !important",
    },
  },

  buttonReq: {
    width: "100%",
    "& a": {
      padding: "9px 40px",
      border: "none",
      backgroundColor: "#ffff16",
      color: "#8e028e",
      fontFamily: "milliardbook",
      fontSize: "19px",
      borderRadius: "9px",
      textDecoration: "none",
    },
  },
}));

export default useStyles;
