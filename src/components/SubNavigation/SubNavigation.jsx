import React from "react";
// import { useState } from "react";

function SubNavigation({ props }) {
  const handleHover = () => {};
  const handleBlur = () => {};

  const subNavigation = () => {
    if (props.isHover && props.isHasSubNavigation) {
      console.log(props);
      return (
        <div>
          <div className="border p-3 ">fankfnakfnakn</div>
        </div>
      );
    } else {
      console.log(props);
    }
  };
  return subNavigation();
}

export default SubNavigation;
