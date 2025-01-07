import React, { useState, useMemo } from "react";

function List({ items }) {
  const sortedItems = useMemo(() => {
    console.log("Sorting items...");
    return [...items].sort();
  }, [items]);

  return (
    <ul>
      {sortedItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Calculation() {
  const [items, setItems] = useState(["Banana", "Apple", "Raspberry", "Mango"]);
  const [count, setCount] = useState(0);

  return (
    <div>
      <List items={items} />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count ({count})
      </button>
    </div>
  );
}

export default Calculation;
