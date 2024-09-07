import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material/styles';  // Thay vì CssVarsProvider
import App from "./App";
import theme from "./theme";
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(  
  <Provider store={store}>
  <ThemeProvider theme={theme}>  
    <CssBaseline />  
    <App />
  </ThemeProvider>  
</Provider>
);
