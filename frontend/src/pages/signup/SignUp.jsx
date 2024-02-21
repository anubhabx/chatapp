import React from "react";
import GenderSelector from "./GenderSelector";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-2xl font-semibold text-center text-gray-300 mb-6">
          Sign Up to <span className="text-blue-300">ChatApp</span>
        </h1>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="label p-2">
              <span className="label-text text-sm text-white">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full h-10"
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
            />
          </div>

          {/* <Gender Selector */}
          <div>
            <GenderSelector />
          </div>

          <div className="mb-3 text-sm">
            Already have an account?{" "}
            {/* <Link to="/login" className="text-blue-300">
              Login
            </Link> */}
          </div>

          <div>
            <button className="btn btn-primary w-full text-white">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
