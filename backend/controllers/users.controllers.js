import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;

    // Get all users except the logged in user
    const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );

    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Internal Server Error." });
  }
};
