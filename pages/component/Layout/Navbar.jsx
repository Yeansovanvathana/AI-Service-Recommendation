import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = ({ isTopOfPage }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div>
      <nav
        className={`z-40 w-full fixed top-2 px-2 py-5${
          isTopOfPage ? "" : "border-b-[1px] border-gray-400 mt-4"
        }`}
      >
        <div
          className={`flex items-center justify-between mx-auto max-w-screen-xl px-4 md:px-10 py-2 bg-white rounded-full ${
            isTopOfPage ? "" : "bg-gray-300"
          }`}
        >
          <img
            src="/logo.png"
            className="w-16 md:w-24 cursor-pointer lg:text-2xl"
          />

          <div>
            <div className="flex relative">
              <input
                type="text"
                placeholder="Search"
                // value={searchQuery}
                // onChange={handleSearch}
                className={`${
                  active ? "w-44  md:w-64 h-10" : "w-0 h-10"
                } border-2 border-gray-300 rounded-full font-light transition-all ease-in-out duration-500 px-4 focus:outline-none`}
              />
              <button
                onClick={handleClick}
                className="absolute z-10 -right-[3px] flex bg-primary-50 rounded-full border-2 border-gray-300 w-10 h-10 items-center justify-center"
              >
                <MagnifyingGlassIcon className="icon" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
