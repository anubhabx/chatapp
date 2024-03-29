import React from "react";
import { BiMessageSquareDetail  } from "react-icons/bi";
import { useAuthContext } from "../../context/authContext";

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center flex-col justify-center h-full w-full gap-5">
      <h1 className="text-3xl font-semibold text-white text-center leading-relaxed">
        Welcome <br /> 👋 <br /> <span className="text-sky-200">{authUser.name}</span>
      </h1>
      <p className="text-base text-white">
        Select a chat from the sidebar to start messaging with your friends
      </p>
      <BiMessageSquareDetail size="5rem" className="text-accent" />
    </div>
  );
};

export default NoChatSelected;
