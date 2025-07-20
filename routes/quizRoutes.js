const express = require('express');
const quizController = require('./../controllers/quizController');
const authController = require('./../controllers/authController');

// mergeParams allows us to access parameters from other routers (e.g., :courseId)
const router = express.Router({ mergeParams: true });

// All routes below this middleware are protected
router.use(authController.protect);

router
  .route('/')
  .get(quizController.getAllQuizzes)
  .post(
    authController.restrictTo('admin'),
    quizController.setCourseId,
    quizController.createQuiz
  );

router
  .route('/:id')
  .get(quizController.getQuiz)
  .patch(
    authController.restrictTo('admin'),
    quizController.updateQuiz
  )
  .delete(
    authController.restrictTo('admin'),
    quizController.deleteQuiz
  );

module.exports = router;