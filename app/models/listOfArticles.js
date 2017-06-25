// app/models/listOfArticles.js
// grab the mongoose module
var mongoose = require('mongoose');

// define listOfArticles model
// module.exports passes this to other files when it is called
module.exports = mongoose.model('listOfArticles', {
    _id : {type: String, default: ''},
    id: { type : String, default: ''},
    listName: { type : String, default: ''},
    listDescription: { type : String, default: ''},
    userName: { type : String, default: ''},
    articleID: { type : String, default: ''}
});
