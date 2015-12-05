app.run(['act', function(act) {
	act.combatantTransformer('job', function(data) {
		return data.Job;
	});

	act.combatantTransformer('parry_rate', function(data) {
		var pct = data.ParryPct;
		return parseFloat(pct.substring(0, pct.length - 1)) / 100;
	});

	act.combatantTransformer('block_rate', function(data) {
		var pct = data.BlockPct;
		return parseFloat(pct.substring(0, pct.length - 1)) / 100;
	});

	act.combatantTransformer('evasion_rate', function(data) {
		return 1 - parseFloat(data.IncToHit) / 100;
	});

	act.combatantTransformer('overheal_rate', function(data) {
		var pct = data.OverHealPct;
		return parseFloat(pct.substring(0, pct.length - 1)) / 100;
	});
});
