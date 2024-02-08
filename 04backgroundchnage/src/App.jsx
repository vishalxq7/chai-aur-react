import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#e2e8f0");

  return (
    <>
      <h2 className="mb-4">Background Change</h2>
      <div>
        <button
          onClick={() => {
            setColor("#2563eb");
          }}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Default
        </button>

        <button
          onClick={() => {
            setColor("#1f2937");
          }}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Dark
        </button>
        <button
          onClick={() => {
            setColor("#15803d");
          }}
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("#b91c1c");
          }}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("#facc15");
          }}
          type="button"
          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setColor("#7e22ce");
          }}
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Purple
        </button>
      </div>
      <div
        className="w-full h-screen duration-200 rounded-lg"
        style={{ background: color }}
      ></div>
    </>
  );
}

export default App;
