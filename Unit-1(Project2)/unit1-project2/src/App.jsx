import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="page">
      <div className="container">
        <h1>Counter App</h1>

        <h2 id="count">{count}</h2>

        <button className="decrease" onClick={decrease}>
          - Decrease
        </button>

        <button className="reset" onClick={resetCounter}>
          Reset
        </button>

        <button className="increase" onClick={increase}>
          + Increase
        </button>
      </div>
    </div>
  );
}

export default App;