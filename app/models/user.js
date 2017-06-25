// app/models/article.js
// grab the mongoose module
var mongoose = require('mongoose');

// define article model
// module.exports passes this to other files when it is called
module.exports = mongoose.model('user', {
    _id : {type: String, default: ''},
    id: { type : String, default: ''},
    userName: { type : String, default: ''},
    firstName: { type : String, default: ''},
    lastName: { type : String, default: ''},
    emailAddress: { type : String, default: ''},
    major: { type : String, default: ''},
    securityQuestion: { type : String, default: ''},
    securityAnswer: { type : String, default: ''}
});