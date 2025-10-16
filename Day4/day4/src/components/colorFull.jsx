import React, { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Counter is: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          background: "blue",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default Main;
