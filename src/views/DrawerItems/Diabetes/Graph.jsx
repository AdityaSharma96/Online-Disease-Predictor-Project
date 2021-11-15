// core
import { Grid, Paper } from "@material-ui/core";

// components
import MyPieChart from "./MyPieChart";

// styles
import { useStyles } from "./styles";
import clsx from "clsx";

export default function Graph() {
  // styles
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.paper, classes.graph)} elevation={5}>
      <Grid container>
        <Grid item xs={12}>
          {/* Title */}
          <Grid item xs={12} className={classes.title}>
            contribution of factors (in %)
          </Grid>

          {/* graph canvas */}
          <Grid item xs={12}>
            <MyPieChart />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
