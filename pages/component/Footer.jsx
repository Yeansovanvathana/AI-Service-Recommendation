import React from "react";

const Footer = () => {
  return (
    <footer className="py-20 w-full border-t-[0.5px] border-gray-300 z-20 mt-20">
      <div className="flex items-center justify-between mx-auto max-w-screen-xl px-10 py-2 ">
        <img src="/logo.png" className="w-28 cursor-pointer lg:text-2xl" />

        <div className="text-gray-600">
          <p>Copyright © 2023 Toolify. All Rights Reserved.</p>
          <p>By Yean sovanvathana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
