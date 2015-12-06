"use strict";

function isBelowScreen(canvas, entity){
	return entity.position.y > canvas.height;
}

module.exports = function(ecs, data) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		if(isBelowScreen(data.canvas, entity)){
			delete data.entities.entities[entity.id];
		}

	}, ["destroyIfBelowScreen"]);
};
