import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const removeCount = () => {
    if (count != 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h2>Counter : {count}</h2>
      <button onClick={addValue} className="button">
        Add Value
      </button>
      <button onClick={removeCount} className="button">
        Remove Value
      </button>
    </>
  );
}

export default App;
