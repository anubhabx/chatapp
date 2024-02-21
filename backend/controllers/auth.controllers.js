import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

// Create a new user
export const signupUser = async (req, res) => {
  try {
    const { name, username, password, gender } = req.body;

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const profilePicture = `https://avatar.iran.liara.run/public/${
      gender === "male" ? "boy" : "girl"
    }?username=${username}`;

    const newUser = new User({
      name,
      username,
      password: hashedPassword,
      gender,
      profilePicture,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        user: {
          _id: newUser._id,
          name: newUser.name,
          username: newUser.username,
          profilePicture: newUser.profilePicture,
        },
        message: "User created successfully",
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
};

// Login a user
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const isMatch = await bcrypt.compare(password, user?.password || "");

    if (!user || !isMatch) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateToken(user._id, res);

    res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        username: user.username,
        profilePicture: user.profilePicture,
      },
      message: "User logged in successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
};

// Logout a user
export const logoutUser = (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
};
