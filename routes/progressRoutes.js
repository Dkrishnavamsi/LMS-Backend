const express = require('express');
const progressController = require('./../controllers/progressController');
const authController = require('./../controllers/authController');

const router = express.Router();

// All routes are protected as progress is user-specific
router.use(authController.protect);

// Routes are based on the course the user is making progress in
router
  .route('/course/:courseId')
  .get(progressController.getOrCreateProgress, progressController.getProgress)
  .patch(
    progressController.getOrCreateProgress,
    progressController.completeLesson
  )
  .post(
    progressController.getOrCreateProgress,
    progressController.recordQuizAttempt
  );

module.exports = router;
