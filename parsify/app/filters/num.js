app.filter('num', function() {
	return function(val, decimals) {
		decimals = (decimals !== undefined ? decimals : 2);
		if (val == NaN) {
			return "---";
		}
		return val.toFixed(decimals);
	}
});
