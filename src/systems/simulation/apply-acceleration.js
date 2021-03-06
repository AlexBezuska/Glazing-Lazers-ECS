"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
  game.entities.registerSearch("accelerationSearch", ["acceleration", "velocity"]);
  ecs.addEach(function acceleration(entity, elapsed) { // eslint-disable-line no-unused-vars
    var velocity = game.entities.get(entity, "velocity");
    var acceleration = game.entities.get(entity, "acceleration");
    velocity.x += elapsed * acceleration.x;
    velocity.y += elapsed * acceleration.y;
  }, "accelerationSearch");
};
