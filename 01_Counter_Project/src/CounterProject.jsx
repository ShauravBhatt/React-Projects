import React from "react";
import { useState } from "react";

function CounterProject() {
  let [value, setValue] = useState(0);

  const addValue = () => {
    if (value < 20) {
      setValue(++value);
      console.log(value);
    } else {
      console.log("Max limit reached !!");
    }
  };

  const removeValue = () => {
    if (value > 0) {
      setValue(--value);
      console.log(value);
    } else {
      console.log("Min limit reached !!");
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div>
          <h1 className="text-3xl font-serif text-center p-3 font-bold">
            Counter Project
          </h1>

          <h2 className="text-2xl text-center font-serif p-3 font-bold">
            Counter Value: {value}
          </h2>

          <div className="flex items-center justify-around p-2">
            <button
              className="bg-white cursor-pointer text-black px-5 py-2 rounded-md border-2 font-bold border-gray-400"
              onClick={addValue}
            >
              +1
            </button>
            <button
              className="bg-white cursor-pointer text-black px-5 rounded-md py-2 font-bold border-2 border-gray-400"
              onClick={removeValue}
            >
              -1
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CounterProject;
