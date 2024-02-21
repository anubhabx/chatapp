import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const signUp = async (name, username, password, confirmPassword, gender) => {
    const success = handleInputErrors(
      name,
      username,
      password,
      confirmPassword,
      gender
    );
    if (!success) return;

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          password,
          gender,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("auth-user", JSON.stringify(data.user));
      setAuthUser(data.user);

      data.message && toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading };
};

export default useSignUp;

function handleInputErrors(name, username, password, confirmPassword, gender) {
  if (!name || !username || !password || !gender) {
    toast.error("All fields are required");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  return true;
}
