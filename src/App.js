import React from "react";
import "./App.css";
import BuyAndSell from "./components/BuyAndSell";
import StockCounter from "./components/StockCounter";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import green from "@mui/material/colors/green";
import purple from "@mui/material/colors/purple";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="site-wrapper">
        <div className="inner-wrapper">
          <BuyAndSell />
          <StockCounter />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
