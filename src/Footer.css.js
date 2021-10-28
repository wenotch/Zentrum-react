import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    marginBottom: "-6px",
    display: "none",
  },
  links: {
    paddingLeft: "30px",
    display: "flex",
    flexDirection: "column",
    "@media only screen and (min-width: 768px)": {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontSize: "19px",
      fontFamily: "milliardbook",
      paddingBottom: "15px",
    },

    "& p": {
      fontSize: "10px",
      paddingBottom: "12px",
      color: "#fff",
      fontFamily: "milliardbook",
    },
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "33px 0 40px",
    "@media only screen and (min-width: 768px)": {
      width: "50%",
      margin: "auto",
    },
    borderTop: "solid 1px #a439a4",
  },
  root: {
    backgroundColor: "#7b007b",
    width: "100%",
    "& img": {},
    "& footer": {
      textAlign: "left",
      padding: "25px",

      "@media only screen and (min-width: 768px)": {
        width: "80%",
        padding: "50px 0 0 350px",
        // margin: "auto",
      },
    },
  },
}));

export default useStyles;
