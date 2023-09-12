import React, { useState } from 'react';
import '../css/Lamp.css';

function Lamp() {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleDrag = (e) => {
    // Calculate the percentage of the progress bar
    const percentage = (e.clientX / window.innerWidth) * 100;
    if (percentage >= 50) {
      setIsLightOn(true);
    } else {
      setIsLightOn(false);
    }
  };

  return (
    <div className="lamp-container">
      <div
        className="progress-bar"
        onMouseMove={handleDrag}
      ></div>
      <div className={`lamp ${isLightOn ? 'on' : 'off'}`}></div>
    </div>
  );
}

export default Lamp;
