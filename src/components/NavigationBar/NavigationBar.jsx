import React, { useContext } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MagnifyingGlass from "../Logos/IconMagnifyingGlass/MagnifyingGlass";
import Close from "../Logos/IconClose/Close";
import Person from "../Logos/IconPerson/Person";
import Cart from "../Logos/IconCart/Cart";
import ChevronDown from "../Logos/IconChevronDown/ChevronDown";
import "./NavigationBar.css";
import SubNavigation from "../SubNavigation/SubNavigation";
import { WidthContext } from "../../contexts";
import Hamburger from "../Logos/IconHamburger/Hamburger";

function NavigationBar({ props }) {
  // let [searchValue, setSearchValue] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenNavigation, setIsOpenNavigation] = useState(false);

  const width = useContext(WidthContext);
  const navigationBarItems = [
    {
      id: 1,
      label: "Home",
      url: "/",
      has_subNavigation: false,
    },
    {
      id: 2,
      label: "About Us",
      url: "/aboutus",
      has_subNavigation: false,
    },
    {
      id: 3,
      label: "Shop",
      url: "/shop",
      has_subNavigation: true,
      sub_navigation_data: [
        {
          id: 1,
          label: "Jacket",
        },
        {
          id: 2,
          label: "T-Shirt",
        },
        {
          id: 3,
          label: "Jeans",
        },
        {
          id: 4,
          label: "Shorts",
        },
      ],
    },
  ];
  const navigationBarItem = navigationBarItems.map((item) => {
    return (
      <div className="menu_item" key={item.id}>
        <li className=" z-50 mr-7 uppercase relative inline-flex items-center text-md lg:text-[15px] font-bold text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200">
          <Link
            to={item.url}
            className={item.has_subNavigation ? "inline-flex" : "flex"}
          >
            {item.label}
            {item.has_subNavigation && (
              <span className="flex self-center ml-2">
                <ChevronDown
                  props={{ fillColor: "black", width: "12px", height: "12px" }}
                />
              </span>
            )}
          </Link>
        </li>
        <div className="sub_menu_item absolute z-50 bg-slate-50">
          {item.has_subNavigation && (
            <SubNavigation props={{ data: item.sub_navigation_data }} />
          )}
        </div>
      </div>
    );
  });

  const handleOpenSearchBar = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  const handleOpenNavigationMobile = () => {
    !isOpenNavigation ? setIsOpenNavigation(true) : setIsOpenNavigation(false);
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

  const navigationBarDesktop = (
    <div className="w-full mx-auto flex justify-center my-3 py-3 px-3">
      <nav className="w-full flex flex-row justify-between self-center px-3">
        <div className="flex self-center">
          <Link to="/" className="inline-flex w-full">
            <img
              src="/logo.png"
              alt="logo company"
              className="h-24 flex self-center items-center"
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
            <div className="ml-4 cursor-pointer">
              <Person props={{ fillColor: "black" }} />
            </div>
            <div className="ml-4 cursor-pointer">
              <Cart props={{ fillColor: "black" }} />
            </div>
          </div>
        </ul>
      </nav>
      <Outlet />
    </div>
  );

  const navigationbarMobile = (
    <div className="w-full mx-auto flex justify-center my-3 py-3 px-3">
      <nav className="w-full flex flex-row justify-between self-center px-3">
        <div className="flex self-center">
          <Link to="/" className="inline-flex">
            <img
              src="/logo.png"
              alt="logo company"
              className="h-24 flex self-center items-center"
            />
          </Link>
        </div>
        <div className="relative right-0 flex">
          <div onClick={handleOpenNavigationMobile} className="self-center">
            <Hamburger />
          </div>
          {isOpenNavigation ? (
            <div className="absolute py-5 px-5 right-0 bg-white border z-50 h-screen">
              <ul className="flex flex-col mx-5 text-sm items-center self-center w-full">
                {isOpen ? searchBar : navigationBarItem}
              </ul>
              <ul className="flex self-center w-full justify-center">
                <div className="inline-flex">
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
                  <div className="ml-4 cursor-pointer">
                    <Person props={{ fillColor: "black" }} />
                  </div>
                  <div className="ml-4 cursor-pointer">
                    <Cart props={{ fillColor: "black" }} />
                  </div>
                </div>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );

  const navigationBar = () => {
    if (width < 1024) {
      return navigationbarMobile;
    } else {
      return navigationBarDesktop;
    }
  };

  return navigationBar();
}

export default NavigationBar;
