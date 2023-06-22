import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";

function SubNavigation({ props }) {
  const subNavigationItem = props.data.map((item) => {
    return (
      <Link
        key={item.id}
        className="lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        to={`/shop/${item.label.toLowerCase()}`}
      >
        {item.label}
      </Link>
    );
  });

  const subNavigation = () => {
    return (
      <div>
        <div className="border p-3 flex-col cursor-pointer flex ">
          {subNavigationItem}
        </div>
      </div>
    );
  };
  return subNavigation();
}

export default SubNavigation;
