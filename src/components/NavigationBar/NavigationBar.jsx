import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MagnifyingGlass from "../Logos/IconMagnifyingGlass/MagnifyingGlass";
import Close from "../Logos/IconClose/Close";
import Person from "../Logos/IconPerson/Person";

function NavigationBar() {
  let [searchValue, setSearchValue] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  const navigationBarItems = [
    {
      id: 1,
      label: "Home",
      url: "/",
    },
    {
      id: 2,
      label: "About Us",
      url: "/About-Us",
    },
    {
      id: 3,
      label: "Shop",
      url: "/Shop",
    },
  ];

  const navigationBarItem = navigationBarItems.map((item) => (
    <li
      key={item.id}
      className="mr-7 inline-flex items-center text-md lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
    >
      <Link to={item.url}>{item.label}</Link>
    </li>
  ));

  const handleOpenSearchBar = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  const searchBar = (
    <form className="">
      <div className="bg-slate-50 dark:bg-slate-800 flex w-[500px] items-center self-center space-x-1.5 px-4 h-full rounded py-3 xl:px-5  ">
        <MagnifyingGlass props={{ fillColor: "black" }} />
        <input
          type="text"
          className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-base"
          placeholder="What are you looking for?"
        />
        <div onClick={handleOpenSearchBar} className="cursor-pointer">
          <Close props={{ fillColor: "black" }} />
        </div>
      </div>
    </form>
  );

  return (
    <div className="w-full mx-auto flex justify-center my-3 py-3">
      <nav className="w-full flex flex-row justify-between self-center px-3">
        <div className="flex self-center">
          <Link to="/" className="inline-flex">
            <img
              src="/logo512.png"
              alt="logo company"
              className="h-10 flex self-center items-center"
            />
          </Link>
        </div>
        <ul className="flex flex-row mx-5 text-xl items-center self-center">
          {isOpen ? searchBar : navigationBarItem}
        </ul>
        <ul className="flex self-center">
          <div className="inline-flex ">
            {!isOpen ? (
              <li
                className="cursor-pointer flex self-center"
                onClick={handleOpenSearchBar}
              >
                <MagnifyingGlass props={{ fillColor: "black" }} />
              </li>
            ) : (
              ""
            )}
            <div className="ml-2 cursor-pointer">
              <Person props={{ fillColor: "black" }} />
            </div>
          </div>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavigationBar;
