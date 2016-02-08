"use strict";


var random = require("../../random");


module.exports = function(ecs, game) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var bulletCollisions = game.entities.get(entity, "collisions");
		var bulletPower = game.entities.get(entity, "power");
		var passThrough = game.entities.get(entity, "passThrough");

		if (bulletCollisions) {
			for (var i = 0; i < bulletCollisions.length; i++) {
				var other = bulletCollisions[i];
				if (game.entities.get(other, "enemy")) {
					var enemyHealth = game.entities.get(other, "health");
					var hitSounds = game.entities.get(other, "hit-sounds");
					game.sounds.play(random.from(hitSounds));
					game.entities.set(other, "health", enemyHealth - bulletPower);
					if (passThrough === false) {
						game.entities.destroy(entity);
					}
				}
			}
		}

	}, "bullet");
};
