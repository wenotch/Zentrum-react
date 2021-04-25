import { makeStyles } from "@material-ui/core/styles";
import Bg from "./images/zentrum-mission-background.svg";

const useStyles = makeStyles((theme) => ({
  mission: {
    width: "100%",
    padding: "40px 25px",
    textAlign: "left",
    backgroundColor: "#a900b5",
    backgroundImage: `url(${Bg})`,
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "luminosity",
    backgroundPosition: "center",
    marginTop: "-4px",
    "& h2": {
      fontFamily: "milliardbook",
      color: "#ffff16",
      fontSize: "38px",
    },
    "& p": {
      lineHeight: "30px",
      fontFamily: "milliardbook",
      fontSize: " 19px",
      color: "#fef6ff",
    },
  },
  miss: {
    marginBottom: "40px",
  },
}));

export default useStyles;
