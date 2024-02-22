import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();

  // console.log(messages.message, loading);
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && (
        <div className="flex w-full h-full items-center justify-center">
          <span className="loading loading-spinner" />
        </div>
      )}
      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-200 text-sm">
          Send a message to start the conversation.
        </p>
      )}
    </div>
  );
};

export default Messages;
