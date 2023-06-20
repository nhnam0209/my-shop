import React from "react";
import Loader from "react-loader-spinner";

function Loading() {
  return (
    <div>
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
