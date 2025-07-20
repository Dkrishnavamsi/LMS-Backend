const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
    required: true,
  },
  completedLessons: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Lesson',
    },
  ],
  quizAttempts: [
    {
      quiz: {
        type: mongoose.Schema.ObjectId,
        ref: 'Quiz',
      },
      score: Number,
      attemptedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  progressPercentage: {
    type: Number,
    default: 0,
  },
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;