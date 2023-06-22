import React from "react";
import { Carousel } from "antd";

function Slider({ props }) {
  return (
    <>
      <Carousel autoplay effect="fade" dotPosition="right">
        {props.children}
      </Carousel>
    </>
  );
}

export default Slider;
