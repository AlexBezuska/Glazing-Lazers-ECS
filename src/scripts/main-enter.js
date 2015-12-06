"use strict";

module.exports = function(data) { // eslint-disable-line no-unused-vars
	var player = data.entities.entities[0];
	player.position.x = (data.canvas.width/2) - (player.size.width/2);
	player.position.y = data.canvas.height * 0.8;
};
