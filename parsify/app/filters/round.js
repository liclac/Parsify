app.filter('round', function() {
	return function(val, decimals) {
		return (val ? val : 0.0).toFixed(decimals || 0);
	}
});
