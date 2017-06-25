/**
 * Created by uyre487 on 6/19/2017.
 */
// public/js/services/article.service.js
angular.module('articleService', []).factory('article', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/articles');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(articleData) {
            return $http.post('/api/articles', articleData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/articles/' + id);
        }
    }

}]);