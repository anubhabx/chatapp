import React from "react";

const MessageSkeleton = () => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0">
          <div className="flex flex-col gap-1">
            <div className="skeleton w-20 h-5"></div>
            <div className="skeleton w-40 h-5"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0">
          <div className="flex flex-col gap-1">
            <div className="skeleton w-20 h-5"></div>
            <div className="skeleton w-40 h-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageSkeleton;
