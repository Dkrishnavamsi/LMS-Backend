const Quiz = require('./../models/quizModel');
const factory = require('./handlerFactory');

exports.setCourseId = (req, res, next) => {
  // Allow nested routes for creating quizzes within a course
  if (!req.body.course) req.body.course = req.params.courseId;
  next();
};

exports.getAllQuizzes = factory.getAll(Quiz);
exports.getQuiz = factory.getOne(Quiz);
exports.createQuiz = factory.createOne(Quiz);
exports.updateQuiz = factory.updateOne(Quiz);
exports.deleteQuiz = factory.deleteOne(Quiz);   