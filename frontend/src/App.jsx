import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authContext";

function App() {
  const { authUser } = useAuthContext();
  // console.log(authUser);

  return (
    <>
      <div className="p-4 flex h-screen items-center justify-center text-white">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/signup"} />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to={"/"} /> : <SignUp />}
          />
        </Routes>
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
            fontSize: ".9rem",
          },
        }}
      />
    </>
  );
}

export default App;
