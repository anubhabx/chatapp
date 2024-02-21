import React, { useState } from "react";
import GenderSelector from "./GenderSelector";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputFields, setInputFields] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signUp } = useSignUp();

  const handleGenderChange = (gender) => {
    setInputFields({
      ...inputFields,
      gender,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputFields);
    await signUp(
      inputFields.name,
      inputFields.username,
      inputFields.password,
      inputFields.confirmPassword,
      inputFields.gender
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-2xl font-semibold text-center text-gray-300 mb-6">
          Sign Up to <span className="text-blue-300">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="label p-2">
              <span className="label-text text-sm text-white">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full h-10"
              value={inputFields.name}
              onChange={(e) => {
                setInputFields({
                  ...inputFields,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="label p-2">
              <span className="label-text text-sm text-white">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input input-bordered w-full h-10"
              value={inputFields.username}
              onChange={(e) => {
                setInputFields({
                  ...inputFields,
                  username: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="label p-2">
              <span className="label-text text-sm text-white">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full h-10"
              value={inputFields.password}
              onChange={(e) => {
                setInputFields({
                  ...inputFields,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="label p-2">
              <span className="label-text text-sm text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full h-10"
              value={inputFields.confirmPassword}
              onChange={(e) => {
                setInputFields({
                  ...inputFields,
                  confirmPassword: e.target.value,
                });
              }}
            />
          </div>

          {/* <Gender Selector */}
          <div>
            <GenderSelector
              handleGenderChange={handleGenderChange}
              selectedGender={inputFields.gender}
            />
          </div>

          <div className="mb-3 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-sky-300 link-hover">
              Login
            </Link>
          </div>

          <div>
            <button className="btn btn-primary w-full text-white">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
