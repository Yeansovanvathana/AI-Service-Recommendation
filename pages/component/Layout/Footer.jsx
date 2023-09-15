import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 w-full border-t-[0.5px] border-gray-300 z-20 mt-20">
      <div className="flex flex-col md:items-center md:justify-between md:flex-row mx-auto max-w-screen-xl px-10 py-2 space-y-4 md:space-x-0">
        <div className="flex items-center md:gap-1 cursor-pointer">
          <img
            src="/logo.png"
            className="w-16 md:w-18 cursor-pointer lg:text-2xl"
          />
          <p className="uppercase font-medium text-gray-600 mt-3">
            Bird Initiative
          </p>
        </div>

        <div className="text-gray-600 text-sm">
          <p>Copyright©2023 Yeansovanvathana. All Rights Reserved.</p>
          <p className="font-medium">Learning Purpose</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
