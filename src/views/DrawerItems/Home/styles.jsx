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
  table: {
    height: 500,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
  card2: {
    marginTop: "2rem",
  },
  tableHeading: {
    fontWeight: "bold",
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
}));
