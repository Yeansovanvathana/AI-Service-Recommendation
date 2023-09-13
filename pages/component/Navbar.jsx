import React, { useState } from "react";
import {
  BriefcaseIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

const Navbar = ({ isTopOfPage }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div>
      <nav
        className={`z-40 w-full fixed top-2 py-5${
          isTopOfPage ? "" : "border-b-[1px] border-gray-400 top-0 bg-white"
        }`}
      >
        <div
          className={`flex items-center justify-between mx-auto max-w-screen-xl px-10 py-2 bg-white rounded-full ${
            isTopOfPage ? "" : "bg-gray-300"
          }`}
        >
          <img src="/logo.png" className="w-24 cursor-pointer lg:text-2xl" />

          <div>
            <div className="flex relative mt-5 md:mt-0">
              <input
                type="text"
                placeholder="Search"
                // value={searchQuery}
                // onChange={handleSearch}
                className={`${
                  active ? "h-8 md:w-52 md:h-10" : "w-full h-8 md:w-0 md:h-10"
                } border-2 border-gray-300 text-green-300 rounded-full transition-all ease-in-out duration-500 px-4`}
              />
              <button
                onClick={handleClick}
                className="absolute z-10 -right-[3px] flex btn-hover bg-gray-200 rounded-full border-2 border-gray-300 w-8 h-8 md:w-10 md:h-10 items-center justify-center"
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
