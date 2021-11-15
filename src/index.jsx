import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// custom theme for material-ui
import { ThemeProvider } from "@material-ui/styles";
import theme from "./MyTheme";

// entry point
import App from "./App";

// redux store
import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
