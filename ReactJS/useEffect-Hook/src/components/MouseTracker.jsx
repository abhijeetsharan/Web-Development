import { useEffect } from "react";
import { useState } from "react";

function MouseTracker() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
  
      // Cleanup: Remove event listener when component unmounts
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []); // Runs once on mount
  
    return <p>Mouse Position: {position.x}, {position.y}</p>;
  }

export default MouseTracker;

  