app.filter('percent', function() {
	return function(val, decimals) {
		decimals = (decimals != undefined ? decimals : 2);
		var pct = 100 * val;
		return (pct ? pct : 0.0).toFixed(decimals);
	}
});
