"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
  game.entities.registerSearch("applyAccelerationSearch", ["applyAcceleration", "velocity"]);
  ecs.addEach(function applyAcceleration(entity, elapsed) { // eslint-disable-line no-unused-vars
    var velocity = game.entities.get(entity, "velocity");
    var applyAcceleration = game.entities.get(entity, "applyAcceleration");
    velocity.x += elapsed * applyAcceleration.x;
    velocity.y += elapsed * applyAcceleration.y;
  }, "applyAccelerationSearch");
};
