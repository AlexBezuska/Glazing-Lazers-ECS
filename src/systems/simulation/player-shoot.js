"use strict";

module.exports = function(ecs, game) {
  ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
    var playerTimers = game.entities.get(entity, "timers");
    if (game.inputs.button("action")) {
      playerTimers.shoot.running = true;
    }
  }, "playerController2d");
};
