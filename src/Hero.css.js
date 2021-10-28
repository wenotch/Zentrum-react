import { makeStyles } from "@material-ui/core/styles";
import Wave from "./images/wave.png";
const useStyles = makeStyles((theme) => ({
  hero: {
    marginTop: "-1px",
    backgroundColor: "#a900b5",
    "@media only screen and (min-width: 768px)": {
      display: "flex",
      flexDirection: "row-reverse",
      padding: "20px 150px 50px",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  imgDiv: {
    width: "100%",
    textAlign: "center",
    "& img": {
      width: "80%",
    },
    "@media only screen and (min-width: 768px)": {
      width: "50%",
    },
  },
  heroText: {
    width: "100%",
    padding: "0 25px",
    "@media only screen and (min-width: 768px)": {
      width: "50%",
      padding: "0",
    },
  },
  heroHeader: {
    fontFamily: "milliardsemibold",
    fontSize: "38px",
    color: "#ffffff",
    "@media only screen and (min-width: 768px)": {
      fontSize: "50px",
    },
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
    width: "100%",
    height: "143px",
    position: "relative",
    background: "#a900b5",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    overflowX: "hidden",
    "@media only screen and (min-width: 768px)": {
      display: "none",
      
    },
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
