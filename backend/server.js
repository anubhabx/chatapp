import path from "path";
import express from "express";
import * as dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/users.routes.js";
import connectToDB from "./database/connectToDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, io, server } from "./socket/socket.js";

const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // for parsing application/json
app.use(cookieParser()); // for parsing cookies
app.use(
  cors({ origin: "https://convoconnect-f8k1.onrender.com", credentials: true })
); // for setting up CORS

app.use("/api/auth", authRoutes); // use authRoutes for /api/auth
app.use("/api/messages", messageRoutes); // use userRoutes for /api/message
app.use("/api/users", userRoutes); // use userRoutes for /api/users

app.use(express.static(path.join(__dirname, "/frontend/dist"))); // for serving the frontend

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start the server and connect to the Database
server.listen(PORT, () => {
  connectToDB();
  console.log(`Server is running on port ${PORT}`);
});
