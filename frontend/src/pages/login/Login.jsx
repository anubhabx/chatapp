import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-2xl font-semibold text-center text-gray-300 mb-6">
          Login to <span className="text-blue-300">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="label p-2">
              <span className="label-text text-sm text-white">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input input-bordered w-full h-10"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              data-theme="dark"
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              data-theme="dark"
            />
          </div>

          <div className="mb-3 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-300 link-hover">
              Sign Up
            </Link>
          </div>
          <div>
            <button className="btn btn-primary w-full text-white">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
