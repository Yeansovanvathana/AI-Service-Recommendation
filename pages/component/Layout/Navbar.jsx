import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = ({ isTopOfPage, onSearch, buttonActive }) => {
  const [active, setActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = () => {
    if (buttonActive) {
      setActive(!active);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchQuery(searchTerm);
    onSearch(searchTerm); // Pass the search term up to the parent component
  };

  return (
    <div>
      <nav
        className={`z-40 w-full fixed top-2 px-4 py-5${isTopOfPage ? "" : ""}`}
      >
        <div
          className={`flex items-center justify-between mx-auto max-w-screen-xl px-4 md:px-10 py-2 bg-white rounded-full ${
            isTopOfPage ? "" : "border-[1px] border-gray-400"
          }`}
        >
          <div
            onClick={() => (window.location.href = "/")}
            className="flex items-center md:gap-1 cursor-pointer"
          >
            <img
              src="/logo.png"
              className="w-16 md:w-18 cursor-pointer lg:text-2xl"
            />
            <p className="uppercase font-medium md:text-xl mt-3 text-gray-600">
              Bird Initiative
            </p>
          </div>
          <div>
            <div className="flex relative">
              <input
                type="text"
                placeholder="Search"
                // value={searchQuery}
                onChange={handleSearch}
                className={`${
                  active ? "w-44  md:w-64 h-10" : "w-0 h-10"
                } border-2 border-gray-300 rounded-full font-light transition-all ease-in-out duration-500 px-4 focus:outline-none`}
              />
              <button
                onClick={handleClick}
                // disabled={buttonActive}
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
