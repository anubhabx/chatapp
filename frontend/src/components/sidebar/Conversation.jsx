import React, { isValidElement } from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);

  // console.log(isSelected, selectedConversation?._id, conversation._id);

  return (
    <>
      <div
        className={`flex gap-3 py-2 items-center transition-colors duration-150 ease-in-out hover:bg-blue-300 rounded p-2 cursor-pointer ${isSelected ? "bg-blue-300" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="rounded-full w-12">
            <img src={conversation.profilePicture} alt="User Avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <p className="font-bold text-white">{conversation.name}</p>
            <span>{emoji}</span>
          </div>
        </div>

        <div className="divider my-0 py-0 h-1"></div>
      </div>
    </>
  );
};

export default Conversation;
