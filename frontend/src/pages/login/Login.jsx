import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-2xl font-semibold text-center text-gray-300 mb-6">
          Login to <span className="text-blue-300">ChatApp</span>
        </h1>

        <form>
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

          <div className="mb-3 text-sm">
            Don't have an account?{" "}
            {/* <Link to="/signup" className="text-blue-300">
              Sign Up
            </Link> */}
          </div>
          <div>
            <button className="btn btn-primary w-full text-white">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
