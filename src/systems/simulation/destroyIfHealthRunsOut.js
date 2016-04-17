"use strict";

var random = require("../../random");
//var particles = require("../../particles");

function healthRunsOut(canvas, entity, game) {
  var entityHealth = game.entities.get(entity, "health");
  return (entityHealth <= 0);
}

module.exports = function(ecs, game) {
  ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
    if (healthRunsOut(game.canvas, entity, game)) {

      if (game.entities.get(entity, "death-sounds")) {
        game.sounds.play(random.from(game.entities.get(entity, "death-sounds")));
        game.entities.remove(entity, "death-sounds");
        game.entities.remove(entity, "hit-sounds");
      }

      if (game.entities.get(entity, "player")) {
        // Player dies

        // if (game.entities.get(entity, "shake")) {
        //   game.entities.set(0, "shake", {
        //     "magnitude": 50,
        //     "duration": 500
        //   });
        // }

        game.entities.get(entity, "timers").shoot.running = false;
        game.entities.remove(entity, "playerController2d");
        game.entities.remove(entity, "movement2d");
        game.entities.get(entity, "animation").name = "explosion-player";
        game.entities.get(entity, "timers").explosion.running = true;
        game.entities.get(entity, "timers").respawn.running = true;
        game.entities.get(entity, "timers").dieShake.running = true;

      } else {
        // Enemy dies
        game.entities.remove(entity, "power");


        // game.entities.set(entity, "shake", {
        //   "magnitude": 20,
        //   "duration": 150
        // });



        game.entities.get(entity, "animation").name = "explosion";
        var timers = game.entities.get(entity, "timers");
        timers.explosion.running = true;

        if (!timers.explosion.running) {
          // var tailSmoke = new particles.Config(game);
          // tailSmoke.origin = entity;
          // tailSmoke.prefab = "smoke";
          // tailSmoke.qtyMin = 20;
          // tailSmoke.qtyMax = 20;
          // tailSmoke.sizeMin = 0.1;
          // tailSmoke.sizeMax = 2;
          // tailSmoke.velocityMin = -0.2;
          // tailSmoke.velocityMax = 0.2;
          // tailSmoke.accelerationY = -0.01;
          // particles.create(tailSmoke);
        }


        // if (game.entities.get(entity, "boss")) {
        //   //game.entities.get(0, "timers").shake.running = true;
        // }
      }

    }

  }, "destroyIfHealthRunsOut");
};
