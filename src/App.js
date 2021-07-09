import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const hanldeIncrease = () => {
    setCount((count) => count + 1);
  };
  const handleDecrease = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={hanldeIncrease}> increment</button>
      <button onClick={handleDecrease}>decrement</button>
    </div>
  );
}
