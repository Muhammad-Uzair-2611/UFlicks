import { FaSearch } from "react-icons/fa";
import React from "react";

const Searchbar = () => {
  return (
    <div className="w-full flex justify-center mt-5">
      <div className="px-3 bg-neutral-800 flex items-center gap-x-2 w-2/3 rounded-3xl h-10">
        <FaSearch />
        <input
          className="w-full outline-0"
          type="search"
          placeholder="Search Movie By Title."
        />
      </div>
    </div>
  );
};

export default Searchbar;
