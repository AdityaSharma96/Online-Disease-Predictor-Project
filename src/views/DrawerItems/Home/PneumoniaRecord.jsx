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
import { single_record_pneumonia } from "../../../redux/actions/pneumonia";
import { useDispatch, useSelector } from "react-redux";

// navigation
import { useRouteMatch } from "react-router-dom";

export default function PneumoniaRecord() {
  // styles
  const classes = useStyles();

  // redux
  const dispatch = useDispatch();
  const data = useSelector((state) => state.singlePneumoniaReducer);

  // matching url params
  const match = useRouteMatch();
  const id = match.params.recordid;

  useEffect(() => {
    dispatch(single_record_pneumonia(id));
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
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableHeading}>Date</TableCell>
                <TableCell>{data.date}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeading}>Image</TableCell>
                <TableCell>
                  <img
                    src={data.input}
                    width={400}
                    height={300}
                    alt="pneumonia"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* result */}
      <Grid item xs={12} md={6} className={classes.seperator}>
        <Paper className={classes.paper} elevation={4}>
          <Typography className={classes.title}>Result</Typography>
        </Paper>

        <TableContainer component={Paper} className={classes.card2}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableHeading}>
                  Output Value
                </TableCell>
                <TableCell>{data.result.Accuracy}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeading}>
                  Prediction
                </TableCell>
                <TableCell
                  className={
                    data.result.Prediction === "does not have pneumonia"
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
