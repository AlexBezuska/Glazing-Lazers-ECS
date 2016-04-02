"use strict";

var particles = require("../particles");
var get = require("../get");
var random = require("../random");

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
  game.sounds.play(random.from(["shoot-3.mp3", "shoot-2.mp3"]));

  var bullet = new particles.Config();
  bullet.game = game;
  bullet.origin = {
    "x": get.topCenterX(game, entity),
    "y": get.topCenterY(game, entity)
  };
  bullet.prefab = "bullet";
  bullet.qtyMin = 1;
  bullet.qtyMax = 1;
  bullet.sizeMin = 0.7;
  bullet.sizeMax = 1.5;
  bullet.velocityMin = -0.1;
  bullet.velocityMax = 0.1;
  bullet.accelerationY = -0.2;
  particles.create(game, bullet);

  var spark = new particles.Config();
  spark.game = game;
  spark.origin = {
    "x": get.topCenterX(game, entity),
    "y": get.topCenterY(game, entity)
  };
  spark.prefab = "spark";
  spark.qtyMin = 0;
  spark.qtyMax = 2;
  spark.sizeMin = 0.5;
  spark.sizeMax = 2;
  spark.velocityMin = -0.5;
  spark.velocityMax = 0.5;
  spark.accelerationX = 0;
  spark.accelerationY = 0.02;
  spark.lifeSpan = 350;

  particles.create(game, spark);

  var spark2 = new particles.Config();
  spark2.game = game;
  spark2.origin = {
    "x": get.topCenterX(game, entity),
    "y": get.topCenterY(game, entity)
  };
  spark2.prefab = "spark";
  spark2.qtyMin = 0;
  spark2.qtyMax = 2;
  spark2.sizeMin = 0.5;
  spark2.sizeMax = 2;
  spark2.velocityMin = -0.3;
  spark2.velocityMax = 0.3;
  spark2.accelerationX = 0;
  spark2.accelerationY = -0.02;
  spark2.lifeSpan = 250;
  spark2.lifeSpanFade = true;
  particles.create(game, spark2);

};
