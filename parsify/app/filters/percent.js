app.filter('percent', function() {
	return function(val, decimals) {
		decimals = (decimals != undefined ? decimals : 2);
		return (100 * val).toFixed(decimals);
	}
});
