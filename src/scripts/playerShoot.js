"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars

	var playerPosition = game.entities.get(entity, "position");
	var playerSize = game.entities.get(entity, "size");
	var bullet = game.instantiatePrefab("bullet");

	game.entities.set(bullet, "position", {
		"x": playerPosition.x + (playerSize.width / 2),
		"y": playerPosition.y
	});

	var playerTimers = game.entities.get(entity, "timers");
	playerTimers.shoot.running = true;
};
