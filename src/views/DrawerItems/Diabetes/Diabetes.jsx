// core
import { Grid } from "@material-ui/core";

// components
import Form from "./Form";
import Result from "./Result";
import Graph from "./Graph";

// styles
import { useStyles } from "./styles";

export default function Diabetes() {
  // styles
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {/* left */}
      <Grid item xs={12} md={6}>
        <Form />
      </Grid>

      {/* right */}
      <Grid item xs={12} md={6} className={classes.rightGrid}>
        <Result />

        <Graph />
      </Grid>
    </Grid>
  );
}
