"use strict";

var particles = require("../particles");
//var get = require("../get");

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars

  var rain = new particles.Config(game);
  rain.origin = entity;
  rain.prefab = "rain";
  rain.qtyMin = 1;
  rain.qtyMax = 5;
  rain.sizeMin = 0.2;
  rain.sizeMax = 3;
  rain.velocityMin = -0.1;
  rain.velocityMax = 0.1;
  rain.accelerationY = 0.002;
  rain.lifeSpan = 2900;
  particles.create(rain);

  var timers = game.entities.get(entity, "timers");
  timers.rain.running = true;


};
