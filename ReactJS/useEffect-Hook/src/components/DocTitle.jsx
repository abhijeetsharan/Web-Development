import { useEffect } from "react";
import { useState } from "react";

function PageTitle() {
    const [title, setTitle] = useState("Home");
  
    useEffect(() => {
      document.title = title;
    }, [title]); // Updates title whenever the 'title' state changes
  
    return (
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter page title"
      />
    );
  }
  
export default PageTitle;