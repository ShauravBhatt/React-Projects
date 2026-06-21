import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((strRes) => strRes.json())
      .then((jsonRes) => setCurrencyInfo(jsonRes[currency]))
      .catch((err) => {
        console.error(err);
        setCurrencyInfo({});
      });
  }, [currency]);

  return currencyInfo;
}

export default useCurrencyInfo;
