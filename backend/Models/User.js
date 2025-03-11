const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 0
  },
  height: {
    type: String, // Example: "6'1\""
  },
  weight: {
    type: Number // Example: 165.3 (in lbs)
  },
  ethnicity: {
    type: String,
    enum: ['Asian', 'African', 'Caucasian', 'Hispanic', 'Other']
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Non-binary', 'Other']
  },
//   profileCompletion: {
//     type: Number,
//     default: 0 // Percentage of profile completion
//   },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
