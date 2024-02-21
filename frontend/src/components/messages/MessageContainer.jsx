import React from "react";
import { MdMoreVert } from "react-icons/md";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[60vw] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <div className="flex items-center gap-2">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <h1 className="text-xl font-semibold text-white">John Doe</h1>
            </div>
            <div>
              <button className="btn-circle btn-ghost flex items-center justify-center">
                <MdMoreVert size="1.5rem" color="white" />
              </button>
            </div>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
