"use strict";


module.exports = function(ecs, game) {
  game.entities.registerSearch("spinSearch", ["rotation", "spin"]);
  ecs.addEach(function spin(entity, elapsed) { // eslint-disable-line no-unused-vars
    var rotation = game.entities.get(entity, "rotation");

    rotation.angle = rotation.angle + (elapsed / rotation.speed);

  }, "spinSearch");
};
