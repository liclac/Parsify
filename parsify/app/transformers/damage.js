app.run(['act', function(act) {
	act.transformer('dps', function(data) {
		return parseFloat(data.dps);
	});

	act.transformer('encdps', function(data) {
		return parseFloat(data.encdps);
	});

	act.transformer('damage', function(data) {
		return {
			done: parseInt(data.damage),
			taken: parseInt(data.damagetaken),
		};
	});

	act.transformer('hits', function(data) {
		var hits = {
			hit: parseInt(data.hits),
			miss: parseInt(data.misses),
			total: parseInt(data.swings),
			crit: parseInt(data.crithits),
		};
		hits.hit_rate = (hits.hit / hits.total);
		hits.miss_rate = (hits.miss / hits.total);
		hits.crit_rate = (hits.crit / hits.hit) || 0;
		return hits;
	});

	act.transformer('maxhit', function(data, combatant) {
		var parts = data.maxhit.split('-');
		return {
			by: parts[parts.length - 3] || combatant,
			name: parts[parts.length - 2],
			damage: parseInt(parts[parts.length - 1].replace(',', '')) || 0,
		};
	});
}]);
