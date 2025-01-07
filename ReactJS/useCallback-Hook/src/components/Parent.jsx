import React, { useState, useCallback } from "react";

function Child({ onIncrement }) {
  console.log("Child rendered");
  return <button onClick={onIncrement}>Increment</button>;
}

const MemoizedChild = React.memo(Child);

function Parent() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <MemoizedChild onIncrement={handleIncrement} />
    </div>
  );
}

export default Parent;
