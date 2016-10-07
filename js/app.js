var myApp = angular.module('myApp', []); // needs the routes here etc

// typical controller set up. This can be a module in a separate file.

myApp.controller('appController', ['$scope', function($scope) {
	$scope.message="Welcome to my app";
}]);