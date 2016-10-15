myApp.controller('RegistrationController', ['$scope', '$firebaseAuth', 'FIREBASE_URL', 
	function($scope, $firebaseAuth, FIREBASE_URL) {

		var ref = new Firebase(FIREBASE_URL);
		$scope.authObj = $firebaseAuth(ref);
		
		$scope.login = function() {
			$scope.message = "Welcome " + $scope.user.email;
		};

		$scope.register = function() {
			$scope.authObj.$createUser({
				email: $scope.user.email,
				password: $scope.user.password
			}).then(function() {
				$scope.message = "Hi" + $scope.user.firstname + ", Thanks for registering";
			}).catch(function(error) {
				$scope.message = error.message
			});
		};


}]);