import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  services: {
    position: "relative",
    zIndex: "44",
    marginTop: "-2px",
    padding: "30px 25px 50.7px",
    backgroundColor: "white",
    backgroundBlendMode: "multiply",
    backgroundImage: 'url("/images/zentrum-service-background.svg")',
    backgroundPosition: "center",
    backgroundRepeat: " no-repeat",

    "& h1": {
      color: " #7b007b",
      fontSize: "38px",
      fontFamily: "milliardbook",
      marginBottom: "12px",
    },
    "& p": {
      fontFamily: "milliardbook",
      fontSize: "19px",
      color: "#49414a",
      lineHeight: "30px",
    },
  },
}));

export default useStyles;
