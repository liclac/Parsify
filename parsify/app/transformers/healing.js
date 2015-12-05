app.run(['act', function(act) {
	act.transformer('enchps', function(data) {
		return parseFloat(data.enchps);
	});

	act.transformer('healing', function(data) {
		return {
			done: parseInt(data.healed),
			taken: parseInt(data.healstaken),
		};
	});

	act.transformer('heals', function(data) {
		var heals = {
			count: parseInt(data.heals),
			crit: parseInt(data.critheals),
		};
		heals.crit_rate = (heals.crit / heals.count) || 0;
		return heals;
	});

	act.transformer('cures', function(data) {
		return parseInt(data.cures);
	});

	act.transformer('maxheal', function(data, combatant) {
		var parts = data.maxheal.split('-');
		return {
			by: parts[parts.length - 3] || combatant,
			name: parts[parts.length - 2],
			healed: parseInt(parts[parts.length - 1]) || 0,
		};
	});
}]);
