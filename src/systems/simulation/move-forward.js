"use strict";

module.exports = function(ecs, game) {
  game.entities.registerSearch("moveForwardSearch", ["moveForward", "velocity", "rotation"]);
  ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars

    var velocity = game.entities.get(entity, "velocity");
    var rotation = game.entities.get(entity, "rotation");
    var speed = game.entities.get(entity, "speed");
    velocity.x = speed * Math.cos(rotation.angle);
    velocity.y = speed * Math.sin(rotation.angle);

  }, "moveForwardSearch");
};
