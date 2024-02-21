import React from "react";

const GenderSelector = ({ handleGenderChange, selectedGender }) => {
  return (
    <div className="p-2">
      <span className="text-sm text-white">Gender</span>
      <div className="flex mb-4 gap-4">
        <div className="form-control">
          <label
            className={`label gap-2 cursor-pointer ${selectedGender === "Male" ? "selected" : ""}`}
          >
            <input
              type="checkbox"
              name="gender"
              className="radio radio-primary"
              checked={selectedGender === "male"}
              onChange={() => handleGenderChange("male")}
            />
            <span className="label-text text-base text-white">Male</span>
          </label>
        </div>
        <div className="form-control">
          <label
            className={`label gap-2 cursor-pointer ${selectedGender === "Female" ? "selected" : ""}`}
          >
            <input
              type="checkbox"
              name="gender"
              className="radio radio-primary"
              checked={selectedGender === "female"}
              onChange={() => handleGenderChange("female")}
            />
            <span className="label-text text-base text-white"> Female </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderSelector;
