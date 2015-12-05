app.filter('percent', function() {
	return function(val, decimals) {
		return (100 * val).toFixed(decimals || 2);
	}
});
