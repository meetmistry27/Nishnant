const express = require('express');
const { signup, login } = require('../Controllers/authController.js');

const router = express.Router();

// Routes
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
