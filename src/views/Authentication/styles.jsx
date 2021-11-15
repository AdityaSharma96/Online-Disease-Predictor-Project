import { makeStyles } from "@material-ui/core/styles";

const loginStyles = makeStyles(() => ({
  copyright: {
    fontSize: "1.2rem",
    letterSpacing: 2,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
  },
  root: {
    height: "100vh",
    padding: "0",
  },
  root1: {
    // padLeft:"30%",
    paddingTop: "5%",
    color: "#fafafa",
  },
  grid: {
    marginTop: "2rem",
  },
}));

export default loginStyles;
