function ACT() {
	this.encounterTransformers = {};
	this.combatantTransformers = {};
	this.encounterGenerators = {};
	this.combatantGenerators = {};
}

ACT.prototype.keyPath = function(obj, key, value) {
	var tmp = obj;
	var parts = key.split('.');
	var last = parts[parts.length - 1];
	for (var i = 0; i < parts.length - 1; i++) {
		tmp = tmp[parts[i]];
		if (tmp === undefined) {
			break;
		}
	}

	if (value !== undefined) {
		tmp[last] = value;
	} else {
		return obj
	}
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
		this.keyPath(state.encounter, key, transformer(encounterData));
	}

	var i = 0;
	for (var name in data.Combatant) {
		var combatant = {};

		var combatantData = data.Combatant[name];
		for (var key in this.combatantTransformers) {
			var transformer = this.combatantTransformers[key];
			combatant[key] = transformer(combatantData, name, i);
			this.keyPath(combatant, key, transformer(combatantData, name, i));
		}

		state.combatants.push(combatant);
		i = state.combatants.length;
	}

	/*for (var key in this.encounterGenerators) {
		var generator = this.encounterGenerators[key];
		this.keyPath(state.encounter, key, generator(state.encounter, state.combatants));
	}*/

	for (var i in state.combatants) {
		var combatant = state.combatants[i];

		for (var key in this.combatantGenerators) {
			var generator = this.combatantGenerators[key];
			this.keyPath(combatant, key, generator(combatant, state.encounter, state.combatants));
		}
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

ACT.prototype.encounterGenerator = function(key, fn) {
	this.encounterGenerators[key] = fn;
}

ACT.prototype.combatantGenerator = function(key, fn) {
	this.combatantGenerators[key] = fn;
}

ACT.prototype.generator = function(key, fn) {
	this.combatantGenerator(key, fn);
	this.encounterGenerator(key, fn);
}
