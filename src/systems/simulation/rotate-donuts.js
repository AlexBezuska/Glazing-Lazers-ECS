"use strict";

module.exports = function(ecs, game) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var donutRotation = game.entities.get(entity, "rotation");

		game.entities.set(entity, "rotation", {
			"angle": donutRotation.angle + (elapsed / 1000)
		});

	}, "donut");
};
