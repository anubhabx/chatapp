import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";

// Get all messages
export const getMessages = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Internal Server Error." });
  }
};

// Send a message
export const sendMessage = async (req, res) => {
  const { id: receiverId } = req.params;
  const { message } = req.body;
  const senderId = req.user._id;

  // console.log(req.params.id, req.body, req.user._id);

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = new Conversation({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = new Message({
    senderId,
    receiverId,
    message,
  });

  if (newMessage) {
    conversation.messages.push(newMessage._id);
    await Promise.all([newMessage.save(), conversation.save()]);
  }

  res.status(201).json({ error: "Message sent", newMessage });
};

// Edit a message
export const editMessage = async (req, res) => {
  const { id: messageId } = req.params;
  const { message } = req.body;

  try {
    const editedMessage = await Message.findByIdAndUpdate(
      messageId,
      { message },
      { new: true }
    );

    res.status(200).json({ message: "Message edited", editedMessage });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Internal Server Error." });
  }
};

// Delete a message
export const deleteMessage = async (req, res) => {
  const { id: messageId } = req.params;

  try {
    await Message.findByIdAndDelete(messageId);
    res.status(200).json({ message: "Message deleted" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Internal Server Error." });
  }
};
