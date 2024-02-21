import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-5">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full h-10"
      />
      <button type="submit" className="btn btn-circle btn-primary">
        <FaSearch color="white" />
      </button>
    </form>
  );
};

export default SearchInput;
