"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.add(function(entities, context) { // eslint-disable-line no-unused-vars
		context.fillStyle = "white";
		context.font = "50px monospace";
		context.fillText(Object.keys(entities).length, 50, 50);
	}, []);
};
