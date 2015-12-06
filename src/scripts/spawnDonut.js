"use strict";

function randomRange(min, max) {
	return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

module.exports = function(donutSpawner, data) { // eslint-disable-line no-unused-vars
	var donut = data.entities.add();

	data.entities.entities[donut.id] = {
		"id" : donut.id,
		"destroyIfBelowScreen": true,
		"name": "donut1",
		"position": {
			"x": randomRange(donutSpawner.position.x, (donutSpawner.position.x + donutSpawner.size.width)),
			"y": donutSpawner.position.y
		},
		"size": {
			"width": 75,
			"height": 75
		},
		"velocity": {
			"x": 0,
			"y": 0.4
		},
		"animation": {
			"time": 0,
			"frame": 0,
			"loop": false,
			"speed": 1,
			"name": "donut1"
		},
		"image": {
			"name": "donut1",
			"sourceX": 0,
			"sourceY": 0,
			"sourceWidth": 0,
			"sourceHeight": 0,
			"destinationX": 0,
			"destinationY": 0,
			"destinationWidth": 75,
			"destinationHeight": 75
		}
	};
	donutSpawner.timers.shoot.running = true;
};
