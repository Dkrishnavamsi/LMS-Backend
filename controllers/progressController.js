const Progress = require('./../models/progressModel');
const Lesson = require('./../models/lessonModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

// Middleware to get or create a progress document
exports.getOrCreateProgress = catchAsync(async (req, res, next) => {
  let progress = await Progress.findOne({
    user: req.user.id,
    course: req.params.courseId,
  });

  if (!progress) {
    progress = await Progress.create({
      user: req.user.id,
      course: req.params.courseId,
    });
  }

  req.progress = progress;
  next();
});

// Mark a lesson as completed
exports.completeLesson = catchAsync(async (req, res, next) => {
  const { lessonId } = req.body;

  if (!lessonId) {
    return next(new AppError('Please provide a lessonId.', 400));
  }

  // Add lesson to completedLessons if it's not already there
  if (!req.progress.completedLessons.includes(lessonId)) {
    req.progress.completedLessons.push(lessonId);
  }

  // Recalculate progress percentage
  const totalLessons = await Lesson.countDocuments({ course: req.params.courseId });
  if (totalLessons > 0) {
    req.progress.progressPercentage = (req.progress.completedLessons.length / totalLessons) * 100;
  } else {
    req.progress.progressPercentage = 0;
  }

  await req.progress.save();

  res.status(200).json({
    status: 'success',
    data: {
      progress: req.progress,
    },
  });
});

// Record a quiz attempt
exports.recordQuizAttempt = catchAsync(async (req, res, next) => {
  const { quizId, score } = req.body;

  if (quizId === undefined || score === undefined) {
    return next(new AppError('Please provide a quizId and score.', 400));
  }

  req.progress.quizAttempts.push({ quiz: quizId, score });
  await req.progress.save();

  res.status(200).json({
    status: 'success',
    data: {
      progress: req.progress,
    },
  });
});

// Get a user's progress for a course
exports.getProgress = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      progress: req.progress,
    },
  });
};