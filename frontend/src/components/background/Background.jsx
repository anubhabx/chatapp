import React from "react";

const Background = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0">
      <img
        src="./Background.png"
        alt="Background"
        className="w-full absolute top-0 left-0 h-full object-cover -z-10"
      />
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)",
        }}
      ></div>
    </div>
  );
};

export default Background;
