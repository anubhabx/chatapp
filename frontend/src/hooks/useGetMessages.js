import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `http://localhost:5000/api/messages/${selectedConversation._id}`,
          {
            credentials: "include",
          }
        );

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setMessages(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation._id) {
      getMessages();
    }
  }, [selectedConversation._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
