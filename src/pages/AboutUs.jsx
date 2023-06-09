import React, { useContext } from "react";
import { WidthContext } from "../contexts";

function AboutUs() {
  const width = useContext(WidthContext);
  return <div>About Us</div>;
}

export default AboutUs;
