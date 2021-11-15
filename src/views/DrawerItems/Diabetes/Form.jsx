// core
import { useState } from "react";
import { Paper, Grid, TextField, Button } from "@material-ui/core";

// styles
import { useStyles } from "./styles";

// redux and api
import { useDispatch } from "react-redux";
import {
  predict_diabetes_4,
  predict_diabetes_8,
} from "../../../redux/actions/diabetes";
import { failure_snackbar } from "../../../redux/actions/snackbar";

export default function Form() {
  //   styles
  const classes = useStyles();
  //   redux
  const dispatch = useDispatch();

  const initialState = {
    pregnancies: 0,
    glucose: 0,
    bp: 0,
    skin_thickness: 0,
    insulin: 0,
    bmi: 0,
    dp_function: "0.130",
    age: 0,
  };

  const [userData, setuserData] = useState(initialState);

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.glucose <= 0 || userData.bmi <= 0 || userData.age <= 0) {
      dispatch(failure_snackbar("Insufficient Data"));
    } else if (
      userData.pregnancies < 0 ||
      userData.bp <= 0 ||
      userData.skin_thickness <= 0 ||
      userData.insulin <= 0
    ) {
      dispatch(
        predict_diabetes_4({
          glucose: userData.glucose,
          bmi: userData.bmi,
          dp_function: userData.dp_function,
          age: userData.age,
        })
      );
    } else {
      dispatch(predict_diabetes_8(userData));
    }
  };

  const handleClear = () => setuserData(initialState);

  return (
    <Paper className={classes.paper} elevation={5}>
      <Grid container spacing={3}>
        {/* Title */}
        <Grid item xs={12} className={classes.title}>
          MEDICAL DETAILS
        </Grid>

        {/* group 1 */}
        <Grid item xs={6}>
          <TextField
            name="bp"
            label="Blood Pressure"
            variant="outlined"
            value={userData.bp}
            onChange={(e) => handleChange(e)}
            helperText="Systolic value in mm/hg"
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            name="glucose"
            label="Glucose Level"
            variant="outlined"
            value={userData.glucose}
            onChange={(e) => handleChange(e)}
            helperText="Glucose count in mg/dl"
            fullWidth
            margin="normal"
            required
          />
        </Grid>
        {/* group 1 */}

        {/* group 2 */}
        <Grid item xs={6}>
          <TextField
            name="skin_thickness"
            label="Skin thickness"
            variant="outlined"
            value={userData.skin_thickness}
            onChange={(e) => handleChange(e)}
            helperText="Skin thickness in mm"
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            name="insulin"
            label="Insulin"
            variant="outlined"
            value={userData.insulin}
            onChange={(e) => handleChange(e)}
            fullWidth
            margin="normal"
          />
        </Grid>
        {/* group 2 */}

        {/* group 3 */}
        <Grid item xs={6}>
          <TextField
            name="bmi"
            label="BMI"
            variant="outlined"
            value={userData.bmi}
            onChange={(e) => handleChange(e)}
            fullWidth
            margin="normal"
            required
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            name="pregnancies"
            label="Total Pregnancies"
            variant="outlined"
            value={userData.pregnancies}
            onChange={(e) => handleChange(e)}
            fullWidth
            margin="normal"
          />
        </Grid>
        {/* group 3 */}

        {/* group 4 */}
        <Grid item xs={12}>
          <TextField
            name="age"
            label="Age"
            variant="outlined"
            value={userData.age}
            onChange={(e) => handleChange(e)}
            helperText="Age in years"
            margin="normal"
            required
          />
        </Grid>
        {/* group 4 */}

        {/* group 5 */}
        <Grid item xs={12}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            className={classes.button}
            variant="outlined"
            color="inherit"
            onClick={handleClear}
          >
            Clear
          </Button>
        </Grid>
        {/* group 5 */}
      </Grid>
    </Paper>
  );
}
