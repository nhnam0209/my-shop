import React, { createContext, useState, useEffect } from "react";
export const WidthContext = createContext();

const ContextIndex = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <WidthContext.Provider value={width}>
      {props.children}
    </WidthContext.Provider>
  );
};

export default ContextIndex;
