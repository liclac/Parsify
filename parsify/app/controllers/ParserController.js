app.controller('ParserController', ['$scope', function($scope) {
	$scope.$on('actUpdate', function(e, state) {
		// $scope.data = state;
		for (var key in state) {
			$scope[key] = state[key];
		}
		$scope.$apply();
	});
}]);
