var myApp = angular.module("myApp", []);

myApp.controller("MyController", function MyController($scope){

	$scope.author = {
		"name" : "Michael Scott",
		"title" : "Manager",
		"company" : "Dunder Mifflin"
	};
});