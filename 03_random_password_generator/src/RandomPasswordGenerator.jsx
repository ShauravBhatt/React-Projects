import React, { useState, useRef, useEffect } from "react";

function RandomPasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = () => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (charAllowed) {
      str += "!@#$%^&*()_+-=[]{}|;:',.<>/?`~";
    }
    if (numAllowed) {
      str += "0123456789";
    }

    for (let i = 1; i <= length; i++) {
      const char = str.charAt(Math.floor(Math.random() * str.length));
      pass += char;
    }

    setPassword(pass);
  };

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numAllowed, setPassword]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(passwordRef.current.value);
    passwordRef.current.select();
  };

  return (
    <div className="bg-black font-serif w-full h-screen flex justify-center items-center">
      <div className="w-[60%] p-5 flex flex-col gap-5 rounded-lg bg-gray-500">
        <h1 className="text-4xl text-white font-semibold text-center ">
          Random Password Generator
        </h1>
        <div className="grid grid-cols-12 rounded-lg bg-white">
          <input
            className="col-span-9 p-2 text-xl selection:bg-blue-400"
            type="text"
            ref={passwordRef}
            value={password}
            readOnly
          />
          <button
            className="col-span-3 cursor-pointer p-2 bg-blue-600 rounded-r-lg text-xl"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>
        <div className="flex  flex-wrap justify-around items-center text-lg">
          <label className="flex items-center">
            <input
              className="mr-2 "
              min={8}
              max={20}
              type="range"
              id="length"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            Length: {length}
          </label>
          <label htmlFor="char">
            <input
              className="mr-1"
              type="checkbox"
              checked={charAllowed}
              id="char"
              onClick={() => setCharAllowed((prev) => !prev)}
            />
            Character
          </label>
          <label htmlFor="num">
            <input
              className="mr-1"
              type="checkbox"
              id="num"
              checked={numAllowed}
              onClick={(prev) => setNumAllowed((prev) => !prev)}
            />
            Number
          </label>
        </div>
      </div>
    </div>
  );
}

export default RandomPasswordGenerator;
