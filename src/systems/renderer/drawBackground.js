"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.add(function(entities, context) { // eslint-disable-line no-unused-vars
		context.fillStyle = "#000";
		context.fillRect(0,0, data.canvas.width, data.canvas.height);
	}, []);
};
