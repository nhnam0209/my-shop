import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MagnifyingGlass from "../../Logos/IconMagnifyingGlass/MagnifyingGlass";
import Close from "../../Logos/IconClose/Close";
import Person from "../../Logos/IconPerson/Person";
import Cart from "../../Logos/IconCart/Cart";
import ChevronDown from "../../Logos/IconChevronDown/ChevronDown";
import "../NavigationBar.css";
import SubNavigation from "../../SubNavigation/SubNavigation";
import Hamburger from "../../Logos/IconHamburger/Hamburger";

function NavigationBarMobile() {
  let [isOpenNavigation, setIsOpenNavigation] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenSubNavigation, setIsOpenSubNavigation] = useState(false);

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
      has_subNavigation: true,
      sub_navigation_data: [
        {
          id: 1,
          title: "Plant And Garden",
          slug: "Plant",
          data: [
            {
              id: 1,
              label: "Garden Kit",
              url: "garden_kit",
            },
            {
              id: 2,
              label: "Pot",
              url: "pot",
            },
            {
              id: 3,
              label: "Indoor Tree",
              url: "indoor_tree",
            },
            {
              id: 4,
              label: "Outdoor Tree",
              url: "outdoor_tree",
            },
          ],
        },
        {
          id: 2,
          title: "Aquarium And Fish Tank",
          slug: "Aquarium",
          data: [
            {
              id: 1,
              label: "Freshwater Fish",
              url: "freshwater_fish",
            },
            {
              id: 2,
              label: "Saltwater Fish",
              url: "saltwater_fish",
            },
            {
              id: 3,
              label: "Aquarium plant",
              url: "aquarium_plant",
            },
            {
              id: 4,
              label: "Fish Tank",
              url: "fish_tank",
            },
          ],
        },
      ],
    },
  ];

  const handleOpenSubNavigation = () => {
    isOpenSubNavigation
      ? setIsOpenSubNavigation(false)
      : setIsOpenSubNavigation(true);
  };

  const navigationBarItem = navigationBarItems.map((item) => {
    return (
      <div
        className=" hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        key={item.id}
      >
        <li className=" z-50 mr-7 w-full justify-end uppercase relative inline-flex items-center text-lg lg:text-[15px] font-bold text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5">
          <Link
            to={item.url}
            className={
              item.has_subNavigation
                ? "inline-flex w-full justify-between"
                : "flex"
            }
            onClick={handleOpenSubNavigation}
          >
            {item.has_subNavigation &&
              (isOpenSubNavigation ? (
                <span className="icon_title flex self-center mr-2">
                  <ChevronDown
                    props={{
                      fillColor: "black",
                      width: "12px",
                      height: "12px",
                    }}
                  />
                </span>
              ) : (
                <span className=" flex self-center mr-2">
                  <ChevronDown
                    props={{
                      fillColor: "black",
                      width: "12px",
                      height: "12px",
                    }}
                  />
                </span>
              ))}
            {item.label}
          </Link>
        </li>
        <div className="z-50 right-0 w-full bg-white">
          {item.has_subNavigation && isOpenSubNavigation ? (
            <SubNavigation props={{ data: item.sub_navigation_data }} />
          ) : (
            ""
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

  return (
    <div className="w-full mx-auto flex justify-center my-3 py-3 px-3 ">
      <nav className="w-full flex flex-row justify-between self-center px-3">
        <div className="flex self-center">
          {!isOpen && (
            <Link to="/" className="inline-flex">
              <img
                src="/logo.png"
                alt="logo company"
                className="h-24 flex self-center items-center"
              />
            </Link>
          )}
        </div>
        <div className="relative right-0 flex my-3 py-3">
          <div className="self-center">
            {isOpen ? (
              <div className="search_bar_animation">{searchBar}</div>
            ) : (
              <li
                className="cursor-pointer flex self-center mr-4"
                onClick={handleOpenSearchBar}
              >
                <MagnifyingGlass props={{ fillColor: "black" }} />
              </li>
            )}
          </div>
          <div onClick={handleOpenNavigationMobile} className="self-center">
            <Hamburger />
          </div>
          {isOpenNavigation ? (
            <div className="menu_item_mobile absolute py-5 px-5 right-[-24.5px] w-80 bg-white border z-50 min-h-screen top-[80px]">
              <ul className="flex flex-col text-sm w-full">
                {navigationBarItem}
              </ul>
              <ul className="icon_title flex self-center w-full justify-center">
                <div className="inline-flex">
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
}

export default NavigationBarMobile;
