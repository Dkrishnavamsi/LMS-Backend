const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A quiz must have a title'],
  },
  course: {
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
    required: [true, 'A quiz must belong to a course'],
  },
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;