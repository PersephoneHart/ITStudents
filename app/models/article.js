// app/models/article.js
// grab the mongoose module
var mongoose = require('mongoose');

// define article model
// module.exports passes this to other files when it is called
module.exports = mongoose.model('article', {
    _id : {type: String, default: ''},
    id: { type : String, default: ''},
    title: { type : String, default: ''},
	authorDisplayName: { type : String, default: ''},
    authorUserName: { type : String, default: ''},
    createdDate: { type : Date, default: ''},
    revisedDate: { type : Date, default: ''},
    content: { type : String, default: ''}
});