// app/models/comment.js
// grab the mongoose module
var mongoose = require('mongoose');

// define comment model
// module.exports passes this to other files when it is called
module.exports = mongoose.model('comment', {
    _id : {type: String, default: ''},
    id: { type : String, default: ''},
    articleID: { type : String, default: ''},
    userName: { type : String, default: ''},
    createdDate: { type : Date, default: ''},
    revisedDate: { type : Date, default: ''},
    parentCommentID: { type : String, default: ''}

});