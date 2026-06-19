import React, { useState } from "react";

function BgChanger() {
  let [color, setColor] = useState("black");
  return (
    <div
      className="h-screen w-screen flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-around gap-5 p-3 rounded-md items-center fixed bg-white border-2 border-gray-300 shadow-lg shadow-gray-600 font-semibold font-serif flex-wrap bottom-7">
        <button
          className="px-3 py-1.5 rounded-lg bg-red-500 border-2 cursor-pointer border-gray-400"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="px-3 py-1.5 rounded-lg bg-blue-600  border-2 cursor-pointer border-gray-400"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="px-3 py-1.5 rounded-lg bg-green-500 border-2 cursor-pointer border-gray-400"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="px-3 py-1.5 rounded-lg bg-pink-400 border-2 cursor-pointer border-gray-400"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="px-3 py-1.5 rounded-lg bg-teal-400 border-2 cursor-pointer border-gray-400"
          onClick={() => setColor("teal")}
        >
          Teal
        </button>
      </div>
    </div>
  );
}

export default BgChanger;
