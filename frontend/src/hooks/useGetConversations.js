import React, { useEffect, useState } from "react";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/users", {
          credentials: "include",
        });

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
