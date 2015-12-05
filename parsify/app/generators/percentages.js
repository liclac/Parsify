app.run(['act', function(act) {
	act.combatantGenerator('damage.part', function(combatant, encounter) {
		return combatant.damage.done / encounter.damage.done;
	});

	act.combatantGenerator('healing.part', function(combatant, encounter) {
		return combatant.healing.done / encounter.healing.done;
	});
}]);
