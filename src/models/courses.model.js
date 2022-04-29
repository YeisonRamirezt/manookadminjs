const mongoose = require('mongoose');
const Courses = mongoose.model('Courses', { 
    name: {type: String, required : true},
    image: String,
    description: String ,
    coursemodules: String,
});
module.exports = Courses

// Database Structure

// Trainee:

// Name
// Last Name
// Email
// Manager
// Position in company
// Start date
// Permissions
// Enrolled Courses
// Process


// Manager:
// Name
// Last Name
// Permission
// Trainees

// Admin:
// Name
// Last Name
// Permission


// Course:
// Name
// Image
// Description
// Modules

// Modules:
// Title
// Description
// Content
// Resources
// Quizz

// Quizzes:
// Question
// Answer
// Module
// Course



// Process (trainee & curse relationship):
// Completed module
// Completed Quiz
// Quiz score
// Course percentage (advancement)
