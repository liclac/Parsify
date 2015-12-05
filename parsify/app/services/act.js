app.factory('act', ['$rootScope', function($rootScope) {
	// Shared instance
	var act = new ACT();

	// Translate ACT updates into Angular events
	document.addEventListener("onOverlayDataUpdate", function (e) {
		var state = act.consume(e.detail);
		$rootScope.$broadcast('actUpdate', state);
	});

	return act;
}]);
