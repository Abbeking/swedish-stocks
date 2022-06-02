import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

const BuyAndSell = () => {
  const [stocksQuantity, setStocksQuantity] = useState();
  const [pricePerStock, setPricePerStock] = useState();
  const [totalCost, setTotalCost] = useState();

  const [sellQuantity, setSellQuantity] = useState();
  const [sellPricePerStock, setSellPricePerStock] = useState();
  const [sellTotalCost, setSellTotalCost] = useState();
  const [diffPrice, setDiffPrice] = useState();

  let checkDiff = Number(sellTotalCost) - Number(totalCost);

  let redOrBlue;
  const isPriceDiff = () => {
    if (checkDiff > 0) {
      redOrBlue = "blue";
    }
    if (checkDiff < 0) {
      redOrBlue = "red";
    }
    return redOrBlue;
  };

  useEffect(() => {
    let updateBuyPrice = Number(stocksQuantity) * Number(pricePerStock);
    setTotalCost(updateBuyPrice);

    let updateSellPrice = Number(sellQuantity) * Number(sellPricePerStock);
    setSellTotalCost(updateSellPrice);

    setDiffPrice(checkDiff);
  }, [
    stocksQuantity,
    pricePerStock,
    totalCost,
    sellQuantity,
    sellPricePerStock,
    sellTotalCost,
    checkDiff,
  ]);

  return (
    <div className="stock-container">
      <div className="holder">
        <div className="stock-card">
          <h1 className="card-title">Köp</h1>

          <div className="input-section">
            <TextField
              label="Antal aktier"
              type="number"
              variant="outlined"
              onChange={(e) => setStocksQuantity(e.target.value)}
            />
          </div>
          <div className="input-section">
            <TextField
              label="Pris per aktie"
              type="number"
              variant="outlined"
              onChange={(e) => setPricePerStock(e.target.value)}
            />
          </div>
        </div>

        <div className="stock-card">
          <h1 className="card-title">Sälj</h1>

          <div className="input-section">
            <TextField
              label="Antal aktier"
              type="number"
              variant="outlined"
              onChange={(e) => setSellQuantity(e.target.value)}
            />
          </div>
          <div className="input-section">
            <TextField
              label="Pris per aktie"
              type="number"
              variant="outlined"
              onChange={(e) => setSellPricePerStock(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="holdSold">
        <div className="input-section">
          <div className="costhold">
            <h3 className="bluebuy">Inköpspris</h3>
            <span className="title-for-result"></span>
          </div>
          <div className="costhold">
            {totalCost > 0 ? (
              <h3 className="cost">
                Ditt pris är {totalCost.toLocaleString()} SEK
              </h3>
            ) : (
              <h3 className="cost">Ditt pris är 0 SEK</h3>
            )}
            <span className="line"></span>
          </div>
        </div>
        <div className="input-section">
          <div className="costhold">
            <h3 className="redsell">Försäljningspris</h3>
            <span className="title-for-result"></span>
          </div>
          <div className="costhold">
            {sellTotalCost > 0 ? (
              <h3 className="cost">
                Ditt pris är {sellTotalCost.toLocaleString()} SEK
              </h3>
            ) : (
              <h3 className="cost">Ditt pris är 0 SEK</h3>
            )}
            <span className="line"></span>
          </div>
        </div>
      </div>
      <span className="result"></span>
      <div className="bottom-result">
        <div className="costhold">
          <h3>Resultat</h3>
          <span className="title-for-result"></span>
        </div>
        <div className="costhold">
          {diffPrice > 0 ? (
            <h3 className={isPriceDiff()}>
              Din vinst är: {diffPrice.toLocaleString()} SEK{" "}
            </h3>
          ) : diffPrice < 0 ? (
            <h3 className={isPriceDiff()}>
              Din förlust är: {diffPrice.toLocaleString()} SEK{" "}
            </h3>
          ) : (
            <h3 className="cost">Ingen förändring: 0 SEK </h3>
          )}
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default BuyAndSell;
