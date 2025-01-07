import React, { useRef, useState } from "react";

function Counter() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const incrementCount = () => {
    countRef.current += 1; // Update the mutable `ref` value
    console.log("Count:", countRef.current);
  };

  const forceRender = () => setRenderCount(renderCount + 1);

  return (
    <div>
      <p>Mutable Count (does not trigger re-render): {countRef.current}</p>
      <p>Render Count: {renderCount}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={forceRender}>Force Render</button>
    </div>
  );
}

export default Counter;
