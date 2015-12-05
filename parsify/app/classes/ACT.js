function ACT() {
	this.encounterTransformers = {};
	this.combatantTransformers = {};
}

ACT.prototype.consume = function(data) {
	var state = {
		// raw: data,
		isActive: data.isActive,
		encounter: {},
		combatants: [],
	};
	
	var encounterData = data.Encounter;
	for (var key in this.encounterTransformers) {
		var transformer = this.encounterTransformers[key];
		state.encounter[key] = transformer(encounterData);
	}

	var i = 0;
	for (var name in data.Combatant) {
		var combatant = {};

		var combatantData = data.Combatant[name];
		for (var key in this.combatantTransformers) {
			var transformer = this.combatantTransformers[key];
			combatant[key] = transformer(combatantData, name, i);
		}

		state.combatants.push(combatant);
		i = state.combatants.length;
	}

	return state;
}

ACT.prototype.encounterTransformer = function(key, fn) {
	this.encounterTransformers[key] = fn;
}

ACT.prototype.combatantTransformer = function(key, fn) {
	this.combatantTransformers[key] = fn;
}

ACT.prototype.transformer = function(key, fn) {
	this.encounterTransformer(key, fn);
	this.combatantTransformer(key, fn);
}
