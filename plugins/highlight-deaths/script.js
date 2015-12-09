app.directive('highlightDeaths', function() {
	return {
		link: function(scope, e, attrs) {
			var charKey = attrs.highlightDeaths || 'char';
			scope.$watch(charKey + '.deaths', function(old, val) {
				var className = 'highlight-deaths-has-deaths';
				if (val > 0) {
					e.addClass(className);
				} else {
					e.removeClass(className);
				}
			});
		}
	};
});
