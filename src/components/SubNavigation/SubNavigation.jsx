import React from "react";
import { useState } from "react";

function SubNavigation({ props }) {
  let [isHover, setIsHover] = useState(false);
  return isHover ? <div className="bg-white w-full"></div> : "";
}

export default SubNavigation;
