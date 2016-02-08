"use strict";

module.exports = function(ecs, game) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars

		var player = 1;
		var playerPosition = game.entities.get(player, "position");

		var clouds = 10;
		var cloudsPosition = game.entities.get(clouds, "position");

		var clouds2 = 11;
		var clouds2Position = game.entities.get(clouds2, "position");

		var backgroundPosition = game.entities.get(entity, "position");
		var backgroundSize = game.entities.get(entity, "size");

		if (cloudsPosition.y > (backgroundPosition.y + backgroundSize.height)) {
			cloudsPosition.y =  backgroundPosition.y;
			clouds2Position.y = backgroundPosition.y - backgroundSize.height;
		}

		var cloudShadow = 13;
		var cloudShadowPosition = game.entities.get(cloudShadow, "position");

		var cloudShadow2 = 14;
		var cloudShadow2Position = game.entities.get(cloudShadow2, "position");

		if (cloudShadowPosition.y > (backgroundPosition.y + backgroundSize.height)) {
			cloudShadowPosition.y =  backgroundPosition.y;
			cloudShadow2Position.y = backgroundPosition.y - backgroundSize.height;
		}


		//update x
		var playerPercent = playerPosition.x / backgroundSize.width;
		var cloudMovementRange = 100;
		var cloudX =  -(playerPercent * cloudMovementRange) | 0;
		cloudsPosition.x = cloudX;
		clouds2Position.x = cloudX;

		var cloudMovementRange2 = 60;
		var cloudX2 =  -(playerPercent * cloudMovementRange2) | 0;
		cloudShadowPosition.x = cloudX2;
		cloudShadow2Position.x = cloudX2;

	}, "background");
};
