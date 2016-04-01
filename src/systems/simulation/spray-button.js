"use strict";

var random = require("../../random");

module.exports = function(ecs, game) {
  ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
    var playerTimers = game.entities.get(entity, "timers");
    if (game.inputs.button("action") || true) {
      playerTimers.spray.running = true;
    }

    var animation = game.entities.get(entity, "animation");
    animation.name = "ship-new";

    if (game.inputs.buttonPressed("up")) {
      game.sounds.play(random.from(["retro-1.mp3","retro-2.mp3","retro-3.mp3"]));
    }
    if (game.inputs.buttonPressed("down")) {
      game.sounds.play(random.from(["thrust-1.mp3","thrust-2.mp3"]));
    }
    if (game.inputs.button("left")) {
      animation.name = "ship-new-left";
    }
    if (game.inputs.button("right")) {
      animation.name = "ship-new-right";
    }


  }, "playerController2d");
};
