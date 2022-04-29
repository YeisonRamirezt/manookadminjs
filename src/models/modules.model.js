
const mongoose = require('mongoose');
const Modules = mongoose.model('Modules', { 
    title: {type: String, required : true},
    description: String,
    content: String,
    resources: String,
    quizzes: String,
});
module.exports = Modules

// Modules:
// Title
// Description
// Content
// Resources
// Quizz