"use strict";

var random = require("../../random");
var ferocity = 15;

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var cameraTimers = game.entities.get(entity, "timers");
		if (cameraTimers.shake.running) {
			var cameraPosition = game.entities.get(entity, "position");
			game.entities.set(entity, "position", {
				"x": random.inRange(cameraPosition.x - ferocity, cameraPosition.x + ferocity),
				"y": random.inRange(cameraPosition.y - ferocity, cameraPosition.y + ferocity)
			});
		}
	}, "camera");
};
