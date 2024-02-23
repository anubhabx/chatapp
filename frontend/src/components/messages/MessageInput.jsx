import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    sendMessage(message);

    setMessage("");
  };

  return (
    <form className="px-4 py-3" onSubmit={handleSubmit}>
      <div className=" w-full flex gap-3">
        <input
          type="text"
          placeholder="Type a message"
          className="form-input flex-1 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          data-theme="dark"
        />
        <button
          type="submit"
          className="btn btn-circle btn-primary flex items-center justify-center"
        >
          {loading ? (
            <span className="loading loading-spinner" />
          ) : (
            <MdSend size="1.5rem" color="white" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
