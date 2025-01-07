import React, { useState, useCallback, useEffect } from "react";

function FetchData({ fetchData }) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <p>Data fetched!</p>;
}

function Fetch() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(() => {
    console.log("Fetching data...");
    setData(["Item 1", "Item 2", "Item 3"]);
  }, []);

  return (
    <div>
      <FetchData fetchData={fetchData} />
    </div>
  );
}

export default Fetch;
