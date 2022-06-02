import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

const StockCounter = () => {
  const [firstStockQuantity, setFirstStockQuantity] = useState();
  const [firstPricePerStock, setFirstPricePerStock] = useState();

  const [secondStockQuantity, setSecondStockQuantity] = useState();
  const [secondPricePerStock, setSecondPricePerStock] = useState();

  const [resultPrice, setResultPrice] = useState();

  useEffect(() => {
    let firstPrice = Number(firstStockQuantity) * Number(firstPricePerStock);

    let secondPrice = Number(secondStockQuantity) * Number(secondPricePerStock);

    let stocks = Number(firstStockQuantity) + Number(secondStockQuantity);

    let hello;

    if (Number(firstPrice) && Number(secondPrice)) {
      hello = (firstPrice + secondPrice) / stocks;
    } else if (Number(firstPrice)) {
      hello = firstPrice / Number(firstStockQuantity);
    } else if (Number(secondPrice)) {
      hello = secondPrice / Number(secondStockQuantity);
    }

    function roundToTwo(num) {
      return +(Math.round(num + "e+2") + "e-2");
    }
    setResultPrice(roundToTwo(hello));
  }, [
    firstStockQuantity,
    firstPricePerStock,
    secondStockQuantity,
    secondPricePerStock,
    resultPrice,
  ]);

  return (
    <div className="stock-container">
      <div className="holder">
        <div className="stock-card">
          <h1 className="card-title">Köptillfälle 1</h1>

          <div className="input-section">
            <TextField
              label="Antal aktier"
              type="number"
              variant="outlined"
              onChange={(e) => setFirstStockQuantity(e.target.value)}
            />
          </div>
          <div className="input-section">
            <TextField
              label="Pris per aktie"
              type="number"
              variant="outlined"
              onChange={(e) => setFirstPricePerStock(e.target.value)}
            />
          </div>
        </div>
        <div className="stock-card">
          <h1 className="card-title">Köptillfälle 2</h1>

          <div className="input-section">
            <TextField
              label="Antal aktier"
              type="number"
              variant="outlined"
              onChange={(e) => setSecondStockQuantity(e.target.value)}
            />
          </div>
          <div className="input-section">
            <TextField
              label="Pris per aktie"
              type="number"
              variant="outlined"
              onChange={(e) => setSecondPricePerStock(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="bottom-result stock-spacing">
        <div className="costhold">
          <h3>Ditt GAV</h3>
          <span className="title-for-result"></span>
        </div>
        {resultPrice > 0 ? (
          <h3 className="cost blue">
            {resultPrice.toLocaleString()} SEK per aktie
          </h3>
        ) : (
          <h3 className="cost">0 SEK per aktie</h3>
        )}
      </div>
    </div>
  );
};

export default StockCounter;
