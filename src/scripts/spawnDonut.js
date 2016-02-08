"use strict";

var random = require("../random");
var donuts = ["donut", "donut2", "donut3","donut4","donut5"];
module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var donutSpawnerPosition = game.entities.get(entity, "position");
	var donutSpawnerSize = game.entities.get(entity, "size");
	var donut = game.instantiatePrefab(random.from(donuts));

	game.entities.set(donut, "position", {
		"x": random.inRange(donutSpawnerPosition.x, (donutSpawnerPosition.x + donutSpawnerSize.width)),
		"y": donutSpawnerPosition.y
	});


	var donutSpawnerTimers = game.entities.get(entity, "timers");
	donutSpawnerTimers.donut.running = true;
};
