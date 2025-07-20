const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A lesson must have a title'],
    trim: true,
  },
  videoUrl: {
    type: String,
    required: [true, 'A lesson must have a video URL'],
  },
  resourceLinks: [String],
  course: {
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
    required: [true, 'A lesson must belong to a course'],
  },
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;