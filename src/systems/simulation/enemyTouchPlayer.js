"use strict";

//var particles = require("../../particles");
//var random = require("../../random");


module.exports = function(ecs, game) {
  ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
    var playerCollisions = game.entities.get(entity, "collisions");
    //var playerTimers = game.entities.get(entity, "timers");

    for (var i = 0; i < playerCollisions.length; i++) {
      var other = playerCollisions[i];
      if (game.entities.get(other, "enemy")
    //  && !playerTimers.invincibilityFrames.running
    ) {
        //playerTimers.invincibilityFrames.running = true;
        // var position = game.entities.get(entity, "position");
        // position.y += 20;
        game.entities.set(0, "shake", {
          "magnitude": 100,
          "duration": 350
        });

        var playerHealth = game.entities.get(entity, "health");
        //particles.spawn(game, entity, "hit", 0, 6);
        var enemyPower = game.entities.get(other, "power");
        if (enemyPower >= 1) {
          //var hitSounds = game.entities.get(entity, "hit-sounds");
          //game.sounds.play(random.from(hitSounds));
        }
        game.entities.set(entity, "health", playerHealth - enemyPower);
      }
    }

  }, "playerController2d");
};
