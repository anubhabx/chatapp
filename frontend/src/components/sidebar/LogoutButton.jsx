import React from "react";
import { MdLogout } from "react-icons/md";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="w-full mt-auto flex items-center">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <button
          onClick={logout}
          className="btn-circle btn-ghost flex items-center justify-center"
        >
          <MdLogout size="1.5rem" color="white" className="rotate-180" />
        </button>
      )}
    </div>
  );
};

export default LogoutButton;
