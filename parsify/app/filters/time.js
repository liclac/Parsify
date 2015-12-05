app.filter('time', function() {
	return function(val, format) {
		format = format || 'mm:ss';
		return moment.unix(val).format(format);
	}
});
