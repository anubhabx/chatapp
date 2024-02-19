import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const generateToken = (userId, res) => {
  const token = jwt.sign(
    {
      id: userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "15d",
    }
  );

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: true, // cookie cannot be accessed by client side script
    sameSite: "strict", // cookie is sent only to the same site as the one that originated it
    secure: process.env.NODE_ENV === "production" ? true : false, // cookie will only be sent over https
  });
};

export default generateToken;
