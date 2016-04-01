"use strict";

function wasAbove(entityLastPosition, entitySize, otherPosition) {
  return entityLastPosition.y + entitySize.height <= otherPosition.y;
}

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
  game.entities.registerSearch("resolveCollisionsSearch", ["collisions","velocity","position", "size", "lastPosition"]);
  ecs.addEach(function resolveCollisions(entity, elapsed) { // eslint-disable-line no-unused-vars
    var entityCollisions = game.entities.get(entity, "collisions");


    for (var i = 0; i < entityCollisions.length; i++) {
      var other = entityCollisions[i];
      var otherPosition = game.entities.get(other, "position");
      var entityLastPosition = game.entities.get(entity, "lastPosition");
      var entitySize = game.entities.get(entity, "size");
      if (game.entities.get(other, "obstacle") && wasAbove(entityLastPosition, entitySize, otherPosition)) {
        game.entities.remove(entity, "velocity");
        game.entities.remove(entity, "collisions");
        game.entities.remove(entity, "rotation");
      }
    }
  }, "resolveCollisionsSearch");
};
