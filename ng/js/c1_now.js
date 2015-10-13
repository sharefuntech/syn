function MyController($scope) {
	$scope.clock = {
		now: new Date()
	};

	var updateClock = function() {
		$scope.clock.now = new Date();
	};

	setInterval(function() {
		$scope.$apply(updateClock);
	}, 1000);

	updateClock();
	// var updateClock = function() {
	// 	$scope.clock = new Date();
	// 	$timeout(function() {
	// 		updateClock();
	// 	}, 1000);
	// };
	// updateClock();
}