// core
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@material-ui/core";

// components
import Form from "./Form";

// redux and api
import { useSelector } from "react-redux";

// styles
import { useStyles } from "./styles";

export default function Pneumonia() {
  // styles
  const classes = useStyles();

  // redux
  const details = useSelector((state) => state.pneumoniaReducer);

  return (
    <Grid container spacing={3}>
      {/* left */}
      <Grid item xs={12} md={6}>
        <Form />
      </Grid>

      {/* right */}
      <Grid item xs={12} md={6} className={classes.rightGrid}>
        <Paper className={classes.paper} elevation={5}>
          <Grid container>
            {/* Title */}
            <Grid item xs={12} className={classes.title}>
              Results
            </Grid>

            {/* results */}
            <Grid item xs={12}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Prediction</TableCell>
                      <TableCell>Output Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{details.Prediction}</TableCell>
                      <TableCell>{details.Accuracy}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography clasName={classes.title2}>
                According to our prediction you{" "}
                {details.Prediction === 1 ? (
                  <Typography className={classes.have}>
                    have pneumonia
                  </Typography>
                ) : (
                  <Typography className={classes.nothave}>
                    don't have pneumonia
                  </Typography>
                )}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
