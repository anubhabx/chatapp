import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="px-2 py-4 flex flex-col shadow-lg">
      <SearchInput />
      <div className="divider px-3 my-2"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
