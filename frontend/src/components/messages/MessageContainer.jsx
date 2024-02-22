import React, { useEffect } from "react";
import { MdMoreVert } from "react-icons/md";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[60vw] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <div className="flex items-center gap-2">
              <img
                src={selectedConversation.profilePicture}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <h1 className="text-xl font-semibold text-white">
                {selectedConversation.name}
              </h1>
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
