app.run(['act', function(act) {
	act.transformer('duration', function(data) {
		return parseInt(data.DURATION);
	});
});
