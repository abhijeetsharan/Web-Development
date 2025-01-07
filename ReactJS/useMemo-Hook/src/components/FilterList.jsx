import React, { useMemo, useState } from "react";

function FilterList({ numbers }) {
  const [threshold, setThreshold] = useState(4);

  const filteredNumbers = useMemo(() => {
    console.log("Filtering numbers...");
    return numbers.filter((num) => num > threshold);
  }, [numbers, threshold]);

  return (
    <div>
      <p>Numbers greater than {threshold}: {filteredNumbers.join(", ")}</p>
      <button onClick={() => setThreshold((prev) => prev + 1)}>
        Increase Threshold ({threshold})
      </button>
    </div>
  );
}

export default FilterList;
