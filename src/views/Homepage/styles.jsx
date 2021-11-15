import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

// image
import cover from "../../images/cover.jpg";

export const useStyles = makeStyles(() => ({
  cover: {
    height: "100vh",
    backgroundImage: `url(${cover})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  imageContent: {
    color: "#fff",
    zIndex: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    width: "100%",
    padding: "2rem",
  },
  title: {
    textTransform: "uppercase",
    fontSize: "3rem",
    letterSpacing: 2,
    marginBottom: "4rem",
  },
  grid: {
    paddingTop: "2rem",
    backgroundColor: grey[100],
    flexGrow: 1,
    paddingBottom: "2rem",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "3rem",
    backgroundColor: grey[900],
    color: "#fff",
    textTransform: "capitalize",
    textAlign: "center",
  },
  footerItem: {
    fontSize: "1.4rem",
    letterSpacing: 2,
    textTransform: "capitalize",
    paddingBottom: "1.3rem",
  },
}));
