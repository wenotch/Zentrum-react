import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: "#a900b5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 25px",
    height: "10vh",
    "@media only screen and (min-width: 768px)": {
      padding: "60px 150px",
    },
  },
}));

export default useStyles;
