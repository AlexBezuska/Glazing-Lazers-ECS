"use strict";

module.exports = function(ecs, game) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var playerCollisions = game.entities.get(entity, "collisions");
		var playerTimers = game.entities.get(entity, "timers");

		for (var i = 0; i < playerCollisions.length; i++) {
			var other = playerCollisions[i];
			if (game.entities.get(other, "enemy") && !playerTimers.invincibilityFrames.running) {
				playerTimers.invincibilityFrames.running = true;
				var playerHealth = game.entities.get(entity, "health");
				game.entities.set(entity, "health", playerHealth - 1);
			}
		}

	}, "player");
};
