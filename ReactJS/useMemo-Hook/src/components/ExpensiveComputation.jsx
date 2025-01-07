import React, { useMemo, useState } from "react";

function ExpensiveComputation({ num }) {
  const [multiplier, setMultiplier] = useState(1);

  // Expensive computation
  const expensiveResult = useMemo(() => {
    console.log("Computing...");
    return num * num;
  }, [num]);

  return (
    <div>
      <p>Result of expensive computation: {expensiveResult}</p>
      <button onClick={() => setMultiplier((prev) => prev + 1)}>
        Increment Multiplier ({multiplier})
      </button>
    </div>
  );
}

export default ExpensiveComputation;
