import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& img": {
      marginBottom: "-6px",
    },
    "& footer": {
      width: "100%",
      textAlign: "left",
      padding: "25px",
      backgroundColor: "#7b007b",

      links: {
        paddingLeft: "77px",
        display: "flex",
        flexDirection: "column",

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
    },
    socials: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "33px 0 40px",
      borderTop: "solid 1px #a439a4",
    },
  },
}));

export default useStyles;
