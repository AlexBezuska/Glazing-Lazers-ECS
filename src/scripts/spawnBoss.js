"use strict";

var random = require("../random");
var bosses = ["boss"];
module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var donutSpawnerPosition = game.entities.get(entity, "position");
	var donutSpawnerSize = game.entities.get(entity, "size");
	var boss = game.instantiatePrefab(random.from(bosses));

	game.entities.set(boss, "position", {
		"x": random.inRange(donutSpawnerPosition.x, (donutSpawnerPosition.x + donutSpawnerSize.width)),
		"y": donutSpawnerPosition.y
	});


	var donutSpawnerTimers = game.entities.get(entity, "timers");
	donutSpawnerTimers.boss.running = true;
};
