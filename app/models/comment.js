// app/models/comment.js
// grab the mongoose module
var mongoose = require('mongoose');

// define comment model
// module.exports passes this to other files when it is called
module.exports = mongoose.model('comment', {
    articleID: { type : String, default: ''},
    commentID: { type : String, default: ''},
    userName: { type : String, default: ''},
    createdDate: { type : DATE, default: ''},
    revisedDate: { type : DATE, default: ''},
    parentCommentID: { type : String, default: ''}

});