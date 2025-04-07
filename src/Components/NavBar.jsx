import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full h-20  px-5 flex py-3 justify-between items-center">
      <div className="logo">
        <img className="w-20" src="./Logo.png" alt="" />
      </div>
      <ul className="flex gap-x-6 font-bold text-xl [&>li]:hover:cursor-pointer ">
        <li>Favourite</li>
        <li>About me </li>
      </ul>
    </nav>
  );
};

export default NavBar;
