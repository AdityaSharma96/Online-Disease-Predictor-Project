import React from "react";
import { CircularProgress, Backdrop } from "@material-ui/core/";

// styles
import { makeStyles } from "@material-ui/core/styles";

// redux
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function MySpinner() {
  const classes = useStyles();

  const { spinnerOpen } = useSelector((state) => state.spinnerReducer);

  return (
    <div>
      <Backdrop className={classes.backdrop} open={spinnerOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
