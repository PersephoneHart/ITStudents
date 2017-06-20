// app/models/article.js
// grab the mongoose module
var mongoose = require('mongoose');

// define article model
// module.exports passes this to other files when it is called
module.exports = mongoose.model('Article', {
    articleID: { type : String, default: ''},
    title: { type : String, default: ''},
	authorDisplayName: { type : String, default: ''},
    authorUserName: { type : String, default: ''},
    createdDate: { type : DATE, default: ''},
    revisedDate: { type : DATE, default: ''},
    content: { type : String, default: ''}
});