// core
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// components
import MyDrawer from "./components/Drawer/MyDrawer";

// global items for notifications and loaders
import MySnackbar from "./components/Snackbar/MySnackbar";
import MySpinner from "./components/Spinner/MySpinner";

// Homepage
import Homepage from "./views/Homepage/Homepage";
import Home from "./views/DrawerItems/Home/Home";

// diabetes
import Diabetes from "./views/DrawerItems/Diabetes/Diabetes";
import PreventionDiabetes from "./views/DrawerItems/Diabetes/Prevention";
import DiabetesRecord from "./views/DrawerItems/Home/DiabetesRecord";

// pneumonia
import Pneumonia from "./views/DrawerItems/Pneumonia/Pneumonia";
import PreventionPneumonia from "./views/DrawerItems/Pneumonia/Prevention";
import PneumoniaRecord from "./views/DrawerItems/Home/PneumoniaRecord";

// fractures
import Fractures from "./views/DrawerItems/Fractures/Fractures";

// map
import Locations from "./views/DrawerItems/Locations";

export default function App() {
  return (
    <Router>
      <MySpinner />
      <MySnackbar />
      <Switch>
        <Route exact path="/" component={Homepage} />

        {/* parent drawer on all pages */}
        <MyDrawer>
          <Route exact path="/home/:uid" component={Home} />

          <Route exact path="/locations" component={Locations} />

          <Route
            exact
            path="/home/diabetes/records/:uid/:recordid"
            component={DiabetesRecord}
          />
          <Route
            exact
            path="/home/pneumonia/records/:uid/:recordid"
            component={PneumoniaRecord}
          />

          <Route exact path="/diabetes/home/:uid" component={Diabetes} />
          <Route
            exact
            path="/diabetes/preventionandcure/:uid"
            component={PreventionDiabetes}
          />

          <Route exact path="/pneumonia/home/:uid" component={Pneumonia} />
          <Route
            exact
            path="/pneumonia/preventionandcure/:uid"
            component={PreventionPneumonia}
          />
          <Route exact path="/fractures/:uid" component={Fractures} />
        </MyDrawer>
      </Switch>
      <Redirect path="/" />
    </Router>
  );
}
