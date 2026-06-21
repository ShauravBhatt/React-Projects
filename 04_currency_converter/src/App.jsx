import React, { useState } from "react";
import { useCurrencyInfo } from "./hooks/index.js";
import InputBox from "./components/InputBox.jsx";

function App() {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const converter = () => {
    setConvertedAmount((amount * currencyInfo[toCurrency]).toFixed(2));
  };

  const swap = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div
      className="min-h-screen selection:bg-gray-950 selection:text-white w-full bg-cover bg-no-repeat flex justify-center items-center px-4"
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg)`,
      }}
    >
      <div className="w-full flex flex-col gap-7 max-w-md p-4 sm:p-5 bg-white/20 rounded-lg backdrop-blur-sm">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-shadow-2xs text-shadow-gray-400 text-center">
          Currency Converter
        </h1>

        <div className="w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("FORM SUBMITTED");
              converter();
            }}
          >
            <div className="flex relative flex-col gap-1">
              <div>
                <InputBox
                  label={"From"}
                  amount={amount}
                  currencyOptions={options}
                  selectedCurrency={fromCurrency}
                  onCurrencyChange={(currency) => setFromCurrency(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={swap}
                  className="absolute outline-gray-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black font-serif text-white px-2.5 py-1 rounded-lg font-semibold cursor-pointer hover:bg-black/95"
                >
                  Swap
                </button>
              </div>

              <div>
                <InputBox
                  label={"To"}
                  amount={convertedAmount}
                  currencyOptions={options}
                  selectedCurrency={toCurrency}
                  onCurrencyChange={(currency) => setToCurrency(currency)}
                  isAmountDisabled
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-black w-full mt-6 text-center font-serif text-white p-2 sm:p-3 rounded-lg font-bold text-base sm:text-lg cursor-pointer hover:bg-black/80"
              onClick={converter}
            >
              Convert {fromCurrency.toUpperCase()} To {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
