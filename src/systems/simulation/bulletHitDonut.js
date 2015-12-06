"use strict";

module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var thisEnemy = data.entities.entities[entity.id];
		if(thisEnemy.collisions.length > 0){
			thisEnemy.hp -= 1;
		}

	}, ["enemy"]);
};
