import React, { useId } from "react";

function InputBox({
  label,
  amount,
  currencyOptions = [],
  selectedCurrency = "usd",
  onAmountChange,
  onCurrencyChange,
  isAmountDisabled = false,
  isCurrencyDisabled = false,
}) {
  const amountInputId = useId();
  return (
    <div className="w-full flex p-3.5 rounded-lg bg-white">
      <div className="w-1/2 text-gray-800 flex flex-col gap-2 items-start">
        <label htmlFor={amountInputId} className="text-sm font-semibold">
          {label}:
        </label>
        <input
          autoFocus
          type="number"
          className="outline-none text-black"
          placeholder="Amount"
          id={amountInputId}
          value={amount}
          onChange={(e) =>
            onAmountChange &&
            onAmountChange(e.target.value == "" ? "" : Number(e.target.value))
          }
          disabled={isAmountDisabled}
        />
      </div>
      <div className="w-1/2 text-gray-800 flex flex-col gap-2 items-end">
        <label className="font-semibold text-sm">Currency Type:</label>
        <select
          className="outline-none cursor-pointer font-serif text-black bg-gray-300/40 px-1  py-0.5 rounded-md "
          value={selectedCurrency}
          disabled={isCurrencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
