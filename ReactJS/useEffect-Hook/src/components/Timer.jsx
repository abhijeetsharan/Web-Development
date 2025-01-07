import { useEffect } from "react";
import { useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
  
      // Cleanup function to clear the interval
      return () => clearInterval(interval);
    }, []); // Runs once on mount
  
    return <p>Seconds elapsed: {seconds}</p>;
  }
  

export default Timer;
  