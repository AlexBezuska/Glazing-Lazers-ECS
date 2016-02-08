"use strict";

module.exports = function(ecs, game) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars

		var water = 15;
		var waterPosition = game.entities.get(water, "position");

		var water2 = 16;
		var water2Position = game.entities.get(water2, "position");

		var backgroundPosition = game.entities.get(entity, "position");
		var backgroundSize = game.entities.get(entity, "size");
		if (waterPosition.y > (backgroundPosition.y + backgroundSize.height)) {
			game.entities.set(water, "position", {
				"x": waterPosition.x,
				"y": backgroundPosition.y
			});
			game.entities.set(water2, "position", {
				"x": water2Position.x,
				"y": backgroundPosition.y - backgroundSize.height
			});
		}

	}, "background");
};
