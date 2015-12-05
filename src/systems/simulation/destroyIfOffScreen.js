"use strict";

function isOffScreen(canvas, entity){
	return ( entity.position.x < 0
		|| entity.position.y < 0
		|| (entity.position.x + entity.size.width) > canvas.width
		|| (entity.position.y + entity.size.height) > canvas.height );
}

module.exports = function(ecs, data) {
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		if(isOffScreen(data.canvas, entity)){
			delete data.entities.entities[entity.id];
		}

	}, ["destroyIfOffScreen"]);
};
