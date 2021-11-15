import { makeStyles } from "@material-ui/core/styles";
import { blue, red, green } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  title: {
    letterSpacing: 2,
    fontSize: "1.5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: blue[600],
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    borderRadius: 50,
    padding: "1.5% 5%",
  },
  rightGrid: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  graph: {
    [theme.breakpoints.down("md")]: {
      marginTop: "1.2rem",
    },
  },
  source: {
    textAlign: "end",
    marginTop: "3rem",
  },
  link: {
    textDecoration: "none",
    textAlign: "end",
  },
  have: {
    textTransform: "capitalize",
    fontWeight: "bold",
    color: red[600],
  },
  nothave: {
    textTransform: "capitalize",
    fontWeight: "bold",
    color: green[600],
  },
  title2: {
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: "0.5rem",
  },
}));
