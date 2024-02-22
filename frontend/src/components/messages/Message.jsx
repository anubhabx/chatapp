import React from "react";
import { useAuthContext } from "../../context/authContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  // console.log(selectedConversation);

  const isSentByCurrentUser = message.senderId === authUser._id;
  const chatClassName = isSentByCurrentUser ? "chat-end" : "chat-start";
  const profilePicture = isSentByCurrentUser
    ? authUser.profilePicture
    : selectedConversation.profilePicture;
  const bubbleBgColor = isSentByCurrentUser ? "bg-blue-500" : "";

  // console.log(profilePicture);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="rounded-full w-8">
          <img src={profilePicture} alt="User Avatar" />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleBgColor}`}>
        <p className="text-white text-base">{message.message}</p>
      </div>
      <div className="chat-footer opacity-75 text-xs flex gap-1 items-center mt-1 text-white">
        {message.createdAt && <span>{extractTime(message.createdAt)} </span>}
      </div>
    </div>
  );
};

export default Message;
