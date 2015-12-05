app.run(['act', function(act) {
	act.transformer('kills', function(data) {
		return parseInt(data.kills);
	});

	act.transformer('deaths', function(data) {
		return parseInt(data.deaths);
	});
});
