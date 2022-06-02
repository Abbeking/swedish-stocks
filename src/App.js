import React from "react";
import "./App.css";
import BuyAndSell from "./components/BuyAndSell";
import StockCounter from "./components/StockCounter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

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
