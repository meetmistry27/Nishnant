const Chat = require('./Models/chat.js');
const axios = require('axios');

// Simulated ML Model API (Replace with actual API)
const ML_API_URL = 'http://localhost:5001/predict'; // Update with actual ML model URL

/**
 * Handles user messages, gets ML model response, and stores conversation in MongoDB
 */
const sendMessage = async (req, res) => {
  try {
    const { userId, userMessage } = req.body;

    if (!userId || !userMessage) {
      return res.status(400).json({ error: 'User ID and message are required' });
    }

    // Send user message to ML model API
    const response = await axios.post(ML_API_URL, { message: userMessage });

    const botResponse = response.data.reply || "I'm not sure how to respond.";

    // Save conversation to database
    const chat = new Chat({
      userId,
      userMessage,
      botResponse
    });

    await chat.save();

    // Send response back to the user
    res.status(200).json({ botResponse });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Error processing message' });
  }
};

/**
 * Retrieves chat history for a specific user
 */
const getChatHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const chatHistory = await Chat.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json({ chatHistory });
  } catch (error) {
    console.error('Chat history error:', error);
    res.status(500).json({ error: 'Error fetching chat history' });
  }
};

module.exports = { sendMessage, getChatHistory };