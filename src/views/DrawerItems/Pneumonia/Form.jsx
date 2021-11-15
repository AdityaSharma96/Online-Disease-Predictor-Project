// core
import { useState } from "react";
import { Paper, Grid, Typography, Button } from "@material-ui/core";

// image upload
import FileBase from "react-file-base64";

// styles
import { useStyles } from "./styles";

// redux and api
import { useDispatch } from "react-redux";
import { failure_snackbar } from "../../../redux/actions/snackbar";
import { predict_pneumonia } from "../../../redux/actions/pneumonia";

export default function Form() {
  //   styles
  const classes = useStyles();

  //   redux
  const dispatch = useDispatch();

  const [file, setFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file === "") {
      dispatch(failure_snackbar("Please select an image"));
    } else {
      dispatch(predict_pneumonia({ base64Image: file }));
    }
  };

  return (
    <Paper className={classes.paper} elevation={5}>
      <Grid container spacing={3}>
        {/* Title */}
        <Grid item xs={12} className={classes.title}>
          UPLOAD IMAGE
        </Grid>

        <Grid item xs={12}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFile(base64)}
          />
        </Grid>

        {file === "" ? null : (
          <Grid item xs={12} className={classes.imageContainer}>
            <Typography variant="button">Your selected image</Typography>
            <img src={file} width="100%" height="100%" alt="pneumonia" />
          </Grid>
        )}

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
        </Grid>
        {/* group 5 */}
      </Grid>
    </Paper>
  );
}
