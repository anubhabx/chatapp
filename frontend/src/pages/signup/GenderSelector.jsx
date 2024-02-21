import React from "react";

const GenderSelector = () => {
  return (
    <div className="p-2">
      <span className="text-sm text-white">Gender</span>
      <div className="flex mb-4 gap-4">
        <div className="form-control">
          <label className="label gap-2 cursor-pointer">
            <input type="radio" name="gender" className="radio radio-primary" />
            <span className="label-text text-base text-white">Male</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label gap-2 cursor-pointer">
            <input type="radio" name="gender" className="radio radio-primary" />
            <span className="label-text text-base text-white"> Female </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderSelector;
