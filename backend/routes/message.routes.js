import express from "express";
import {
  deleteMessage,
  editMessage,
  getMessages,
  sendMessage,
} from "../controllers/message.controllers.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
router.patch("/edit/:id", protectRoute, editMessage);
router.delete("/delete/:id", protectRoute, deleteMessage);

export default router;
