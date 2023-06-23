import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import Tree from "../Logos/IconTree/Tree";
import Fish from "../Logos/IconFish/Fish";
import "../NavigationBar/NavigationBar.css";

function SubNavigation({ props }) {
  const iconTitle = (slug) => {
    switch (slug) {
      case "Plant":
        props = { fillColor: "green" };
        return <Tree {...props} />;
      case "Aquarium":
        props = { fillColor: "#5085A5" };
        return <Fish {...props} />;
      default:
        return null;
    }
  };

  const subNavigationItem = props.data.map((items) => {
    const dataSubNavigation = items.data.map((item) => {
      return (
        <Link
          key={item.id}
          className="lg:text-[15px] text-right font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          to={`/shop/${item.url}`}
        >
          {item.label}
        </Link>
      );
    });
    return (
      <div className="flex flex-col">
        <div className="flex flex-col  py-2">
          <span
            className="icon_title inline-flex justify-end uppercase"
            key={items.id}
          >
            <span className="mr-2">{iconTitle(items.slug)}</span>
            <h1 className="font-bold">
              <strong>{items.title}</strong>
            </h1>
          </span>
          {dataSubNavigation}
        </div>
      </div>
    );
  });

  const subNavigation = () => {
    return (
      <div className="sub_menu_item_mobile">
        <div className="p-3 flex-col cursor-pointer flex ">
          {subNavigationItem}
        </div>
      </div>
    );
  };
  return subNavigation();
}

export default SubNavigation;
