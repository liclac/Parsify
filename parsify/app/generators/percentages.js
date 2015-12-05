app.run(['act', function(act) {
	act.combatantGenerator('damage.part', function(combatant, encounter) {
		var part = combatant.damage.done / encounter.damage.done;
		return part != NaN ? part : 0;
	});

	act.combatantGenerator('healing.part', function(combatant, encounter) {
		var part = combatant.healing.done / encounter.healing.done;
		return part != NaN ? part : 0;
	});
}]);
