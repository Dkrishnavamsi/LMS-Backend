# Learning Management System (LMS) - Backend

This is the backend for a basic Learning Management System (LMS) built with Node.js, Express, and MongoDB. The application provides a RESTful API for user authentication, course management, lessons, quizzes, and progress tracking.

## 🚀 Live Demo

You can access a live version of the hosted API here:

**[http://34.93.10.253:5000/](http://34.93.10.253:5000/)**

## ✨ Features

* **User Authentication**: JWT-based user signup and login.
* **Role-Based Access Control**: Differentiates between `user` and `admin` roles, with specific permissions for each.
* **Course Management**: Admins can create, update, and delete courses. Any user can view all available courses and details for a single course.
* **Lesson Management**: Each course can have multiple lessons, which include a title, video URL, and resource links.
* **Quizzes and Questions**: Courses can contain quizzes with multiple-choice questions.
* **Progress Tracking**: Users can enroll in courses, mark lessons as completed, attempt quizzes, and view their overall progress.
* **Secure & Scalable**: Implements security best practices using `helmet`, `express-mongo-sanitize`, `xss-clean`, and `hpp`. Includes rate limiting to prevent abuse.
* **Containerized**: Fully containerized with Docker for easy setup and deployment.

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB (with Mongoose)
* **Authentication**: JSON Web Tokens (JWT)
* **Containerization**: Docker, Docker Compose

## 🚀 Getting Started

### Prerequisites

* Node.js (v14 or higher)
* npm
* MongoDB Atlas account (or a local MongoDB instance)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Dkrishnavamsi/LMS-Backend
    cd LMS-Backend
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

3.  Create a `config.env` file in the root directory and add your environment variables:
    ```env
    NODE_ENV=development
    PORT=3000
    DATABASE=<YOUR_MONGODB_ATLAS_CONNECTION_STRING>
    DATABASE_PASSWORD=<YOUR_DATABASE_PASSWORD>
    JWT_SECRET=your-jwt-secret-key
    JWT_EXPIRES_IN=90d
    JWT_COOKIE_EXPIRES_IN=90
    ```

4.  Start the server:
    ```bash
    npm start
    ```
    The application will be running on `http://localhost:3000`.

## 🐳 Running with Docker

You can also run the application using Docker and Docker Compose, which simplifies the setup.

1.  Make sure you have Docker installed.
2.  From the project root, run the following command:
    ```bash
    docker-compose up
    ```
    To run in detached mode, use:
    ```bash
    docker-compose up -d
    ```
    This will build the Docker image and start the container, which will be accessible at `http://localhost:3000`.

## 📚 API Endpoints

Here is a summary of the available API endpoints.

### User Routes

* `POST /api/v1/users/signup`: Register a new user.
* `POST /api/v1/users/login`: Log in an existing user.
* `POST /api/v1/users/forgotPassword`: Request a password reset token.
* `PATCH /api/v1/users/resetPassword/:token`: Reset user password.
* `GET /api/v1/users`: Get all users (Admin only).

### Course Routes

* `GET /api/v1/courses`: Get all available courses.
* `POST /api/v1/courses`: Create a new course (Admin only).
* `GET /api/v1/courses/:id`: Get a single course by its ID.
* `PATCH /api/v1/courses/:id`: Update a course (Admin only).
* `DELETE /api/v1/courses/:id`: Delete a course (Admin only).

### Lesson Routes

* `GET /api/v1/courses/:courseId/lessons`: Get all lessons for a specific course.
* `POST /api/v1/courses/:courseId/lessons`: Create a new lesson for a course (Admin only).
* `GET /api/v1/lessons/:id`: Get a single lesson by its ID.

### Quiz Routes

* `GET /api/v1/courses/:courseId/quizzes`: Get all quizzes for a specific course.
* `POST /api/v1/courses/:courseId/quizzes`: Create a new quiz for a course (Admin only).
* `GET /api/v1/quizzes/:id`: Get a single quiz by its ID.

### Progress Routes

* `GET /api/v1/progress/course/:courseId`: Get the current user's progress for a specific course.
* `PATCH /api/v1/progress/course/:courseId`: Mark a lesson as completed. (Body: `{ "lessonId": "..." }`)
* `POST /api/v1/progress/course/:courseId`: Record a quiz attempt. (Body: `{ "quizId": "...", "score": ... }`)
