import React, { useState } from "react";
// build an react app that displays the real-time value of a text input field
function InputTracker() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <p>Current Value: {inputValue}</p>
    </div>
  );
}

export default InputTracker;
