import React from "react";
import NavBar from "./src/Components/NavBar";
import Searchbar from "./src/Components/Searchbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Searchbar />
      <Outlet />
    </div>
  );  
};

export default Layout;
