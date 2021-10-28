import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  contact: {
    width: "100%",
    padding: "25px",
    textAlign: "left",
    marginBottom: "100px",
    "@media only screen and (min-width: 768px)": {
      padding: "50px 150px 50px",
      width: "50%",
      margin: "auto",
    },
    "& h1": {
      fontSize: "38px",
      color: "#8e028e",
      fontFamily: "milliardbook",
      paddingBottom: "20px",
    },
    "& p": {
      color: "#49414a",
      fontSize: "19px",
      lineHeight: "30px",
      fontFamily: "milliardbook",
    },

    "& input": {
      display: "block",
      width: "100%",
      padding: "15px 23px",
      backgroundColor: "#f6dbff",
      borderRadius: "8px",
      border: "none",
      marginTop: "10px",

      "&::placeholder": {
        color: "#dec1df",
        fontFamily: "milliardbook",
        fontSize: "14px",
      },
    },

    "& textarea": {
      width: "100%",
      padding: "15px 23px",
      backgroundColor: "#f6dbff",
      borderRadius: "8px",
      border: "none",
      marginTop: "10px",
    },

    "& label": {
      color: "#49414a",
      fontSize: "19px",
      lineHeight: "30px",
      fontFamily: "milliardbook",
    },
    "& form": {
      "& button": {
        width: "100%",
        backgroundColor: "#8e028e",
        color: "#fff",
        padding: "15px 0",
        border: "none",
        borderRadius: "8px",
        marginTop: "20px",
        fontFamily: "milliardbook",
        fontSize: "19px",
      },
    },
  },
  label: {
    paddingTop: "20px",
  },
}));

export default useStyles;
