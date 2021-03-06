"use strict";

//var particles = require("../../particles");
var random = require("../../random");


module.exports = function(ecs, game) {
  ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
    var bulletCollisions = game.entities.get(entity, "collisions");
    var bulletPower = game.entities.get(entity, "power");
    var passThrough = game.entities.get(entity, "passThrough");

    if (bulletCollisions) {
      for (var i = 0; i < bulletCollisions.length; i++) {
        var other = bulletCollisions[i];
        if (game.entities.get(other, "enemy") && !game.entities.get(other, "timers").explosion.running) {
          var enemyHealth = game.entities.get(other, "health");
          if (bulletPower < enemyHealth) {
            var hitSounds = game.entities.get(other, "hit-sounds");
            game.sounds.play(random.from(hitSounds));
          }
          game.entities.set(other, "health", enemyHealth - bulletPower);

          // particles.spawn(game, other, "hit", 0, 6, 0.5, 2);
          game.entities.set(other, "shake", {
            "magnitude": 50,
            "duration": 300
          });
          if (passThrough === false) {
            game.entities.destroy(entity);
            return;
          }
        }
      }
    }

  }, "bullet");
};
