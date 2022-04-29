const mongoose = require('mongoose');
const Process = mongoose.model('Process', { 
    trainee: {type: String, required : true},
    completionmodules: String,
    completionquizzes: String ,
    quizzesscores: String,
    completioncourses: String,
});
module.exports = Process
// Process (trainee & curse relationship):
// Completed module
// Completed Quiz
// Quiz score
// Course percentage (advancement)
