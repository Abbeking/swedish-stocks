import React, { useEffect, useState } from "react";
import "./App.css";
import BuyAndSell from "./components/BuyAndSell";
import StockCounter from "./components/StockCounter";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import green from "@mui/material/colors/green";
import purple from "@mui/material/colors/purple";

import discordgroup from "./discord-img.png";

import ScaleLoader from "react-spinners/ScaleLoader";
import Fade from "react-reveal/Fade";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <div className="loading">
      <div className="pre-load-wrapper">
        <a
          href="https://discord.gg/2AZ4b5WWbP"
          target="_blank"
          rel="noreferrer"
        >
          <img className="discord" alt="" src={discordgroup} href="" />
        </a>
        <h1 className="pre-load-text">Gå med Aktielator för att chatta</h1>
      </div>
      <ScaleLoader size={30} color={"#3f99f9"} loading={loading} />
    </div>
  ) : (
    <ThemeProvider theme={theme}>
      <div className="site-wrapper">
        <div className="inner-wrapper">
          <Fade top>
            <BuyAndSell />
            <StockCounter />
          </Fade>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
