angular.module("FinalApp")
.controller("MainController",function($scope,$resource){
	Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id:"@id"});
	$scope.posts = Post.query();
        console.log($scope.posts);
});
