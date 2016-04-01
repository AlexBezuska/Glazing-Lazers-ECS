"use strict";

var particles = require("../particles");
//var get = require("../get");

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars

  var velocity = game.entities.get(entity, "velocity");
  if (velocity.y < 0) {
    var thrust = -Math.floor(velocity.y * 6);
    if (thrust > 50) { thrust = 50; }
    var thrusterLeft = new particles.Config();
    thrusterLeft.game = game;
    thrusterLeft.origin = leftThruster(entity, game);
    thrusterLeft.prefab = "thrust";
    thrusterLeft.qtyMin = thrust;
    thrusterLeft.qtyMax = thrust;
    thrusterLeft.velocityMin = -0.2;
    thrusterLeft.velocityMax = 0.2;
    thrusterLeft.accelerationY = 0.02;
    thrusterLeft.lifeSpan = 250;
    thrusterLeft.lifeSpanFade = true;
    particles.create(game, thrusterLeft);

    var thrusterRight = new particles.Config();
    thrusterRight.game = game;
    thrusterRight.origin = rightThruster(entity, game);
    thrusterRight.prefab = "thrust";
    thrusterRight.qtyMin = thrust;
    thrusterRight.qtyMax = thrust;
    thrusterRight.sizeMin = 0.1;
    thrusterRight.sizeMax = 1.2;
    thrusterRight.velocityMin = -0.3;
    thrusterRight.velocityMax = 0.3;
    thrusterRight.accelerationY = 0.02;
    thrusterRight.lifeSpan = 250;
    thrusterRight.lifeSpanFade = true;
    particles.create(game, thrusterRight);

  }

  if (velocity.y > 0) {
    var retro = Math.floor(velocity.y * 6);
    if (retro > 50) { retro = 50; }

    var retroLeft = new particles.Config();
    retroLeft.game = game;
    retroLeft.origin = leftRetro(entity, game);
    retroLeft.prefab = "retro";
    retroLeft.qtyMin = retro;
    retroLeft.qtyMax = retro;
    retroLeft.sizeMin = 0.1;
    retroLeft.sizeMax = 1.2;
    retroLeft.velocityMin = -0.3;
    retroLeft.velocityMax = 0.3;
    retroLeft.lifeSpan = 120;
    retroLeft.lifeSpanFade = true;
    particles.create(game, retroLeft);

    var retroRight = new particles.Config();
    retroRight.game = game;
    retroRight.origin = rightRetro(entity, game);
    retroRight.prefab = "retro";
    retroRight.qtyMin = retro;
    retroRight.qtyMax = retro;
    retroRight.sizeMin = 0.1;
    retroRight.sizeMax = 1.2;
    retroRight.velocityMin = -0.3;
    retroRight.velocityMax = 0.3;
    retroRight.lifeSpan = 120;
    retroRight.lifeSpanFade = true;
    particles.create(game, retroRight);

  }

  var tailSmoke = new particles.Config();
  tailSmoke.origin = {
    "x": 500,
    "y": 500
  };
  tailSmoke.prefab = "smoke";
  tailSmoke.qtyMin = 9;
  tailSmoke.qtyMax = 9;
  tailSmoke.angle = 0;
  tailSmoke.arcWidth = Math.PI / 2;
  tailSmoke.sizeMin = 0.8;
  tailSmoke.sizeMax = 1.2;
  tailSmoke.velocityMin = 0.9;
  tailSmoke.velocityMax = 0.5;
//  tailSmoke.accelerationY = 0.1;
  tailSmoke.lifeSpan = 600;
  particles.create(game, tailSmoke);

};

function rightThruster(entity, game) {
  var position = game.entities.get(entity, "position");
  var size = game.entities.get(entity, "size");
  return {
    "x": (position.x + size.width) - 25,
    "y": position.y + size.height - 20
  };
}

function leftThruster(entity, game) {
  var position = game.entities.get(entity, "position");
  var size = game.entities.get(entity, "size");
  return {
    "x": position.x + 25,
    "y": position.y + size.height - 20
  };
}


function rightRetro(entity, game) {
  var position = game.entities.get(entity, "position");
  var size = game.entities.get(entity, "size");
  return {
    "x": (position.x + size.width) - 30,
    "y": position.y + 45
  };
}

function leftRetro(entity, game) {
  var position = game.entities.get(entity, "position");
  return {
    "x": position.x + 30,
    "y": position.y + 45
  };
}
