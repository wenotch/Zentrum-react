import { makeStyles } from "@material-ui/core/styles";
import Wave from "./images/wave.png";
const useStyles = makeStyles((theme) => ({
  hero: {
    marginTop: "-1px",
    backgroundColor: "#a900b5",
  },
  imgDiv: {
    width: "100%",

    textAlign: "center",
  },
  heroText: {
    width: "100%",
    padding: "0 25px",
  },
  heroHeader: {
    fontFamily: "milliardsemibold",
    fontSize: "38px",
    color: "#ffffff",
  },
  heroHeaderColor: {
    color: "#ffff16",
  },
  heroP: {
    fontFamily: "milliardbook",
    color: "#ebebeb",
    fontSize: "19px",
    marginTop: "14px",
    paddingBottom: "23.5px",
    lineHeight: "30px",
  },
  section: {
    // marginTop: "-4px",
    // paddingBottom: "55px",
    width: "100%",
    height: "143px",
    position: "relative",
    background: "#a900b5",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    overflowX: "hidden",
  },

  wave: {
    position: "absolute",
    width: "100%",
    height: "140px",
    bottom: "-1px",
    left: "0",
    background: `url(${Wave})`,
    backgroundPosition: "center",
    // "-webkit-animation": "animate 40s linear infinite",
    animation: `$animate 40s linear infinite`,
    // animationName: `$animate`,
    // animationDuration: ({ duration }) => `${40}s`,
    // animationIterationCount: "infinite",
  },
  "@keyframes animate": {
    "0%": {
      backgroundPosition: "0",
    },
    "100%": {
      backgroundPosition: " 1360px",
    },
  },

  // @keyframes animate {
  //   0% {
  //     background-position: 0,
  //   }
  //   100% {
  //     background-position: 1360px,
  //   }
  // }

  // @-webkit-keyframes animate-reverse {
  //   0% {
  //     background-position: 1360px,
  //   }
  //   100% {
  //     background-position: 0,
  //   }
  // }

  // @keyframes animate-reverse {
  //   0% {
  //     background-position: 1360px,
  //   }
  //   100% {
  //     background-position: 0,
  //   }
  // }
}));

export default useStyles;
