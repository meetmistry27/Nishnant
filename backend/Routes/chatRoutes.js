const express = require('express');
const axios = require('axios');
const Chat = require('../models/chat.model');
const router = express.Router();

// Simulated ML Model API (Replace with actual ML API)
const ML_API_URL = 'http://localhost:5001/predict'; // Example ML Model URL

router.post('/send-message', async (req, res) => {
  try {
    const { userId, userMessage } = req.body;

    // Send the message to ML model for response
    const response = await axios.post(ML_API_URL, { message: userMessage });

    const botResponse = response.data.reply || "I'm not sure how to respond.";

    // Store conversation in the database
    const chat = new Chat({
      userId,
      userMessage,
      botResponse
    });

    await chat.save();

    res.status(200).json({ botResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error processing message' });
  }
});

module.exports = router;

