import React from "react";
import { MdSend } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

const MessageInput = () => {
  return (
    <div className="px-4 py-3">
        <div className=" w-full flex gap-3">
          <input
            type="text"
            placeholder="Type a message"
            className="form-input flex-1 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="btn btn-circle btn-primary flex items-center justify-center">
            <MdSend size="1.5rem" color="white" />
          </button>
        </div>
    </div>
  );
};

export default MessageInput;