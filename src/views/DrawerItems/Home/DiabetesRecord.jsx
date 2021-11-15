// core
import { useEffect } from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";

// styles
import { useStyles } from "./styles";

// redux and api
import { single_record_diabetes } from "../../../redux/actions/diabetes";
import { useDispatch, useSelector } from "react-redux";

// navigation
import { useRouteMatch } from "react-router-dom";

export default function DiabetesRecord() {
  // styles
  const classes = useStyles();

  // redux
  const dispatch = useDispatch();
  const data = useSelector((state) => state.singleDiabetesReducer);
  console.log(data);

  // matching url params
  const match = useRouteMatch();
  const id = match.params.recordid;

  useEffect(() => {
    dispatch(single_record_diabetes(id));
  }, [dispatch, id]);

  return (
    <Grid container spacing={3}>
      {/* input */}
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper} elevation={4}>
          <Typography className={classes.title}>Input</Typography>
        </Paper>
        <TableContainer component={Paper} className={classes.card2}>
          <Table>
            {/* <TableHead> */}
            {/* <TableRow>
            </TableRow> */}
            {/* </TableHead> */}
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableHeading}>Date</TableCell>
                <TableCell>{data.date}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeading}>Age</TableCell>
                <TableCell>{data.input.age}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeading}>BMI</TableCell>
                <TableCell>{data.input.bmi}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeading}>BP</TableCell>
                <TableCell>{data.input.bp}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeading}>
                  DP Function
                </TableCell>
                <TableCell>{data.input.dp_function}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeading}>Glucose</TableCell>
                <TableCell>{data.input.glucose}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeading}>Insulin</TableCell>
                <TableCell>{data.input.insulin}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeading}>
                  Pregnancies
                </TableCell>
                <TableCell>{data.input.pregnancies}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeading}>
                  Skin Thickness
                </TableCell>
                <TableCell>{data.input.skin_thickness}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* result */}
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper} elevation={4}>
          <Typography className={classes.title}>Result</Typography>
        </Paper>

        <TableContainer component={Paper} className={classes.card2}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableHeading}>
                  Gradient Boost Classifier
                </TableCell>
                <TableCell>{data.result.RandomForestNormal}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeading}>
                  Random Forest Classifier
                </TableCell>
                <TableCell>{data.result.RandomForestUnskewed}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeading}>
                  KNN Classifier
                </TableCell>
                <TableCell>{data.result.KNNUnskewed}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeading}>
                  Prediction
                </TableCell>
                <TableCell
                  className={
                    data.result.Prediction === "does not have diabetes"
                      ? classes.nothave
                      : classes.have
                  }
                >
                  {data.result.Prediction}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
