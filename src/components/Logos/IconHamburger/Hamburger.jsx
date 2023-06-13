import React, { useState } from "react";
import "./Hamburger.css";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={`hamburger ${isOpen ? "open" : ""}`}
      onClick={handleClick}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
}

export default Hamburger;
