"use strict";

module.exports = function(ecs, game) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var bossPosition = game.entities.get(entity, "position");
		var bossSize = game.entities.get(entity, "size");
		var bossVelocity = game.entities.get(entity, "velocity");


		var viewportPosition = game.entities.get(12, "position");
		var viewportSize = game.entities.get(12, "size");

		if (bossPosition.x > (viewportSize.width - bossSize.width)) {
			bossVelocity.x = -0.1;
		}
		if (bossPosition.x < viewportPosition.x) {
			bossVelocity.x = 0.1;
		}
		if (bossPosition.y > viewportPosition.y + 200) {
			bossVelocity.y = 0.0;
		}

	}, "boss");
};
