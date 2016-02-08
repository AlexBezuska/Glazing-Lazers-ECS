"use strict";

var random = require("../../random");

function healthRunsOut(canvas, entity, game) {
	var entityHealth = game.entities.get(entity, "health");
	return (entityHealth <= 0);
}

module.exports = function(ecs, game) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		if (healthRunsOut(game.canvas, entity, game)) {
			game.entities.get(0, "timers").shake.running = true;
			var deathSounds = game.entities.get(entity, "death-sounds");
			game.sounds.play(random.from(deathSounds));
			if (game.entities.get(entity, "player")) {
				game.entities.get(entity, "timers").respawn.running = true;
				game.entities.get(entity, "timers").shoot.running = false;
				game.entities.remove(entity, "image");
				game.entities.remove(entity, "playerController2d");
				game.entities.remove(entity, "movement2d");
			} else {
				game.entities.destroy(entity);
			}

		}

	}, "destroyIfHealthRunsOut");
};
