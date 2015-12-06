/**
 * Bootstrap for Parsify.
 * 
 * This encapsulates all initialization for Parsify, all in the name of keeping
 * the main HTML file as clean and readable as possible.
 */

"use strict";

function Loader(head) {
	this.head = head;
}

/**
 * Load a script by dynamically inserting it into the page HEAD.
 * 
 * @param head The page's <head> element
 * @param src Path to the JS file to load
 */
Loader.prototype.loadScript = function(src) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = src;
	script.async = false;
	this.head.appendChild(script);
}

/**
 * Load a stylesheet by dynamically inserting it into the page HEAD.
 * 
 * @param head The page's <head> element
 * @param href Path to the CSS file to load
 */
Loader.prototype.loadStyle = function(href) {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = href;
	this.head.appendChild(link);
}

var loader = new Loader(document.getElementsByTagName('head')[0]);

(function() {
	var scripts = [
		// Third-party libraries
		'parsify/bower_components/angular/angular.js',
		'parsify/bower_components/moment/moment.js',
		
		// Parsify core
		'parsify/app/app.js',
		'parsify/app/classes/ACT.js',

		// Services
		'parsify/app/services/act.js',

		// Filters
		'parsify/app/filters/num.js',
		'parsify/app/filters/pct.js',
		'parsify/app/filters/round.js',
		'parsify/app/filters/time.js',

		// Data Transformers
		'parsify/app/transformers/test.js',
		'parsify/app/transformers/times.js',
		'parsify/app/transformers/encounters.js',
		'parsify/app/transformers/combatants.js',
		'parsify/app/transformers/damage.js',
		'parsify/app/transformers/healing.js',
		'parsify/app/transformers/kills_deaths.js',

		// Data Generators
		'parsify/app/generators/percentages.js',

		// Controllers
		'parsify/app/controllers/ParserController.js',
	];

	for (var i in scripts) {
		var script = scripts[i];
		loader.loadScript(script);
	}

	var styles = [
		// Main styles
		'parsify/app/styles/fixes.css',
		'parsify/app/styles/app.css',
	];

	for (var i in styles) {
		var style = styles[i];
		loader.loadStyle(style);
	}
})();
