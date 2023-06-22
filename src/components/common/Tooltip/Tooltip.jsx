import React, { useState } from "react";
import "./Tooltip.css";
function Tooltip(props) {
  const [isVisible, setIsVisible] = useState(false);
  const showTooltip = () => {
    setIsVisible(true);
  };
  const hideTooltip = () => {
    setIsVisible(false);
  };
  return (
    <div className="tooltip-container">
      <div
        className="tooltip-trigger"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        {props.children}
      </div>
      {isVisible && <div className="tooltip">{props.text}</div>}
    </div>
  );
}

export default Tooltip;
