import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Focus the input element
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter text here" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
