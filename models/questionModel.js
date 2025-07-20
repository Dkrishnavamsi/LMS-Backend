const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'A question must have text'],
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  quiz: {
    type: mongoose.Schema.ObjectId,
    ref: 'Quiz',
    required: [true, 'A question must belong to a quiz'],
  },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;