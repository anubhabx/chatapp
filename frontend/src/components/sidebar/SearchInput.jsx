import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import { toast } from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search) {
      return toast.error("Search field cannot be empty");
    }
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters");
    }

    const conversation = conversations.find((conv) =>
      conv.name.toLowerCase().includes(search.toLowerCase())
    );

    if (!conversation) {
      return toast.error("No such user found");
    }

    setSelectedConversation(conversation);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-5">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full h-10"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle btn-primary">
        <FaSearch color="white" />
      </button>
    </form>
  );
};

export default SearchInput;
