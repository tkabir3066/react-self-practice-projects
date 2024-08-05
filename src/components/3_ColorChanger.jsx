import React, { useState } from "react";
// build a react component that changes its background color based on user input

function ColorChanger() {
  const [color, setColor] = useState("");
  return (
    <div style={{ backgroundColor: color, height: "500px", width: "700px" }}>
      <input
        style={{ width: "500px" }}
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter a color (e.g., red, #00ff00, rgb(0,0,255))"
      />
    </div>
  );
}

export default ColorChanger;
