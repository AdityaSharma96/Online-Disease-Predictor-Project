// core
import { Grid, Paper } from "@material-ui/core";

// redux and api
import { useSelector, useDispatch } from "react-redux";
import { past_records_diabetes } from "../../../redux/actions/diabetes";
import { past_records_pneumonia } from "../../../redux/actions/pneumonia";

// components
import MyTable from "./MyTable";

// styles
import { useStyles } from "./styles";
import { useEffect } from "react";

export default function Home() {
  // styles
  const classes = useStyles();

  // redux
  const dispatch = useDispatch();
  const diabetesRecords = useSelector((state) => state.pastDiabetesReducer);
  const pneumoniaRecords = useSelector((state) => state.pastPneumoniaReducer);

  useEffect(() => {
    dispatch(past_records_diabetes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(past_records_pneumonia());
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
      {/* left */}
      <Grid item xs={12} md={6}>
        {/* Title */}
        <Paper className={classes.paper} elevation={5}>
          <Grid item xs={12} className={classes.title}>
            Past diabetes records
          </Grid>

          {/* results */}
          <Grid item xs={12} className={classes.table}>
            <MyTable name="diabetes" arr={diabetesRecords} />
          </Grid>
        </Paper>
      </Grid>

      {/* right */}
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper} elevation={5}>
          <Grid container>
            <Grid item xs={12}>
              {/* Title */}
              <Grid item xs={12} className={classes.title}>
                Past pneumonia records
              </Grid>

              {/* graph canvas */}
              <Grid item xs={12} className={classes.table}>
                <MyTable name="pneumonia" arr={pneumoniaRecords} />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
