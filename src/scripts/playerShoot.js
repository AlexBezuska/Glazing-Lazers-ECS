"use strict";

module.exports = function(player, data) { // eslint-disable-line no-unused-vars
	var bullet = data.entities.add();

	data.entities.entities[bullet.id] = {
		"id" : bullet.id,
		"destroyIfOffScreen": true,
		"name": "bullet",
		"position": {
			"x": player.position.x + (player.size.width/2),
			"y": player.position.y
		},
		"size": {
			"width": 1,
			"height": 2
		},
		"velocity": {
			"x": 0,
			"y": -0.9
		},
		"animation": {
			"time": 0,
			"frame": 0,
			"loop": false,
			"speed": 1,
			"name": "bullet"
		},
		"image": {
			"name": "bullet",
			"sourceX": 0,
			"sourceY": 0,
			"sourceWidth": 0,
			"sourceHeight": 0,
			"destinationX": 0,
			"destinationY": 0,
			"destinationWidth": 1,
			"destinationHeight": 2
		}
	};
	player.timers.shoot.running = true;
};
