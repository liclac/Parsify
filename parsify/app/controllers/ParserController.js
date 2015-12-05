app.controller('ParserController', ['$scope', function($scope) {
	$scope.$on('actUpdate', function(e, state) {
		$scope.data = state;
		$scope.$apply();
	});
}]);
