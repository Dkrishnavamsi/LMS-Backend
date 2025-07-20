const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A course must have a title'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'A course must have a description'],
    trim: true,
  },
  instructor: {
    type: String,
    required: [true, 'A course must have an instructor'],
  },
  price: {
    type: Number,
    required: [true, 'A course must have a price'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;