import mongoose from "mongoose";

// Create a conversation schema
const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  {
    timestamps: true, // Create a timestamp for the conversation
  }
);

export default mongoose.model("Conversation", conversationSchema); // Create a conversation model
