app.filter('num', function() {
	return function(val, decimals) {
		decimals = (decimals !== undefined ? decimals : 2);
		if (typeof(val) === "string") {
			val = parseFloat(val);
		}
		if (Number.isNaN(val)) {
			return "---";
		}
		return val.toFixed(decimals);
	}
});
