app.run(['act', function(act) {
	act.encounterTransformer('title', function(data) {
		return data.title;
	});

	act.encounterTransformer('zone', function(data) {
		return data.CurrentZoneName;
	});
}]);
