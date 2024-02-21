import express from "express";
import * as dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/users.routes.js";
import connectToDB from "./database/connectToDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json()); // for parsing application/json
app.use(cookieParser()); // for parsing cookies
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api/auth", authRoutes); // use authRoutes for /api/auth
app.use("/api/message", messageRoutes); // use userRoutes for /api/message
app.use("/api/users", userRoutes); // use userRoutes for /api/users

// Start the server and connect to the Database
app.listen(PORT, () => {
  connectToDB();
  console.log(`Server is running on port ${PORT}`);
});
