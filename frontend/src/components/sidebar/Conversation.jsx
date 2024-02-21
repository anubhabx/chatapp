import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-3 py-2 items-center transition-colors duration-150 ease-in-out hover:bg-blue-200 rounded p-2 cursor-pointer">
        <div className="avatar online">
          <div className="rounded-full w-12">
            <img src="https://avatar.iran.liara.run/public" alt="User Avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
              <p className="font-bold text-white">John Doe</p>
              <span>💕</span>
          </div>
        </div>

        <div className="divider my-0 py-0 h-1"></div>
      </div>
    </>
  );
};

export default Conversation;
