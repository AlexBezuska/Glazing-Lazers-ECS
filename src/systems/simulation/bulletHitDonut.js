"use strict";
var onEntityDelete = require("splat-ecs/lib/systems/box-collider").onEntityDelete;
module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars

		for(var i =0; i < entity.collisions.length; i++){
			var bullet = data.entities.entities[entity.collisions[i]];
			if(bullet && bullet.bullet){
				onEntityDelete(bullet, data);
				delete data.entities.entities[entity.collisions[i]];
				entity.hp -= 1;
			}

		}

	}, ["enemy"]);
};
