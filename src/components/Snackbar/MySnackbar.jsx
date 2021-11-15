// core
import { Collapse, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

// redux
import { useDispatch, useSelector } from "react-redux";
import { hide_snackbar } from "../../redux/actions/snackbar";

export default function MySnackbar() {
  // redux
  const dispatch = useDispatch();

  const { snackbarOpen, snackbarSeverity, snackbarMessage } = useSelector(
    (state) => state.snackbarReducer
  );

  const handleClose = () => dispatch(hide_snackbar());

  return (
    <Collapse in={snackbarOpen}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MyAlert onClose={handleClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </MyAlert>
      </Snackbar>
    </Collapse>
  );
}

function MyAlert(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}
