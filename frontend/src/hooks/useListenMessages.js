import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    if (socket) {
      socket?.on("newMessage", (newMessage) => {
        const notificationSound = new Audio("/notification.mp3");
        notificationSound.play();
        setMessages([...messages, newMessage]);
      });

      return () => {
        socket?.off("newMessage");
      };
    }
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
