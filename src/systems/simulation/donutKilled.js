"use strict";
var onEntityDelete = require("splat-ecs/lib/systems/box-collider").onEntityDelete;
module.exports = function(ecs, data) { // eslint-disable-line no-unused-vars
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		if(entity.hp <= 0){
			onEntityDelete(entity, data);
			delete data.entities.entities[entity.id];
		}

	}, ["enemy"]);
};
