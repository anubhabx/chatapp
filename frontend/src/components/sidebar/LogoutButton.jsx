import React from "react";
import { MdLogout } from "react-icons/md";

const LogoutButton = () => {
  return (
    <div className="w-full mt-auto">
      <button className="btn-circle btn-ghost flex items-center justify-center">
        <MdLogout size="1.5rem" color="white" className="rotate-180" />
      </button>
    </div>
  );
};

export default LogoutButton;
