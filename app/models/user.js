// app/models/article.js
// grab the mongoose module
var mongoose = require('mongoose');

// define article model
// module.exports passes this to other files when it is called
module.exports = mongoose.model('Article', {
    userName: { type : String, default: ''},
    firstName: { type : String, default: ''},
    lastName: { type : String, default: ''},
    emailAddress: { type : String, default: ''},
    major: { type : String, default: ''},
    createdDate: { type : DATE, default: ''},
    birthDate: { type : DATE, default: ''}
});