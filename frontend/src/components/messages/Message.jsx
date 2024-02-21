import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="rounded-full w-8">
          <img src="https://avatar.iran.liara.run/public" alt="User Avatar" />
        </div>
      </div>
      <div className="chat-bubble bg-blue-500">
        <p className="text-white text-base">Hello!</p>
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center mt-1 text-white">
        12:00
      </div>
    </div>
  );
};

export default Message;
