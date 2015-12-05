/**
 * Bootstrap for Parsify.
 * 
 * This encapsulates all initialization for Parsify, all in the name of keeping
 * the main HTML file as clean and readable as possible.
 */

"use strict";

var Parsify = {
	scripts: [
		// Third-party libraries
		'parsify/bower_components/angular/angular.js',
		
		// Parsify core
		'parsify/app/app.js',

		// Services
		'parsify/app/services/act.js',

		// Data Transformers
		'parsify/app/transformers/test.js',
		'parsify/app/transformers/times.js',
		'parsify/app/transformers/encounters.js',
		'parsify/app/transformers/damage.js',
		'parsify/app/transformers/healing.js',
		'parsify/app/transformers/kills_deaths.js',

		// Controllers
		'parsify/app/controllers/ParserController.js',
	],
	styles: [
		// Main styles
		'parsify/app/styles/app.css',
	],
};

(function() {
	var head = document.getElementsByTagName('head')[0];

	/**
	 * Load a script by dynamically inserting it into the page HEAD.
	 * 
	 * @param head The page's <head> element
	 * @param src Path to the JS file to load
	 */
	var loadScript = function(head, src) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = src;
		script.async = false;
		head.appendChild(script);
	}

	/**
	 * Load a stylesheet by dynamically inserting it into the page HEAD.
	 * 
	 * @param head The page's <head> element
	 * @param href Path to the CSS file to load
	 */
	var loadStyle = function(head, href) {
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = href;
		head.appendChild(link);
	}

	// Load configured scripts
	for (var i in Parsify.scripts) {
		var script = Parsify.scripts[i];
		loadScript(head, script);
	}

	// Load configured styles
	for (var i in Parsify.styles) {
		var style = Parsify.styles[i];
		loadStyle(head, style);
	}
})();
