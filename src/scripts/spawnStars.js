"use strict";

var random = require("../random");

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var donutSpawnerPosition = game.entities.get(entity, "position");
	var donutSpawnerSize = game.entities.get(entity, "size");
	var star = game.instantiatePrefab("star");
	game.entities.set(star, "position", {
		"x": random.inRange(donutSpawnerPosition.x, (donutSpawnerPosition.x + donutSpawnerSize.width)),
		"y": donutSpawnerPosition.y
	});

	var donutSpawnerTimers = game.entities.get(entity, "timers");
	donutSpawnerTimers.stars.running = true;
};
