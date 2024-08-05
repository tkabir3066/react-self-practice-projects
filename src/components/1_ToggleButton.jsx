import React, { useState } from "react";
//  build a button that toggles between "ON" and "OFF" states.
function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "On" : "Off"}</button>
    </div>
  );
}

export default ToggleButton;
