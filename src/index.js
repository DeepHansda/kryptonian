import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  typography:{
    fontFamily:"'Poppins', sans-serif"
  }
})
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
