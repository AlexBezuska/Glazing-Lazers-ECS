"use strict";

var particles = require("splat-ecs/lib/particles.js");

var thrusterLeft = new particles.Config("thrust");
thrusterLeft.sizeMin = 0.1;
thrusterLeft.sizeMax = 1.2;
thrusterLeft.velocityMin = -0.2;
thrusterLeft.velocityMax = 0.2;
thrusterLeft.accelerationY = 0.02;
thrusterLeft.lifeSpanMax = 250;
//thrusterLeft.lifeSpanFade = true;

var thrusterRight = new particles.Config("thrust");
thrusterRight.sizeMin = 0.1;
thrusterRight.sizeMax = 1.2;
thrusterRight.velocityMin = -0.2;
thrusterRight.velocityMax = 0.2;
thrusterRight.accelerationY = 0.02;
thrusterRight.lifeSpanMax = 250;
//thrusterRight.lifeSpanFade = true;

var retroLeft = new particles.Config("retro");
retroLeft.sizeMin = 0.1;
retroLeft.sizeMax = 1.2;
retroLeft.velocityMin = -0.3;
retroLeft.velocityMax = 0.3;
retroLeft.lifeSpan = 120;
//retroLeft.lifeSpanFade = true;

var retroRight = new particles.Config("retro");
retroRight.sizeMin = 0.1;
retroRight.sizeMax = 1.2;
retroRight.velocityMin = -0.3;
retroRight.velocityMax = 0.3;
retroRight.lifeSpan = 120;
//retroRight.lifeSpanFade = true;

var tailSmoke = new particles.Config("smoke");
tailSmoke.qtyMin = 0;
tailSmoke.qtyMax = 12;
tailSmoke.angle =  Math.PI / 2;
tailSmoke.arcWidth = Math.PI  / 8;
tailSmoke.sizeMin = 0.5;
tailSmoke.sizeMax = 2;
tailSmoke.velocityMin = 0.9;
tailSmoke.velocityMax = 0.5;
tailSmoke.lifeSpan = 900;
tailSmoke.spreadType = "even";

var get = require("../get");

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars

  var velocity = game.entities.get(entity, "velocity");
  if (velocity.y < 0) {
    var thrust = -Math.floor(velocity.y * 6);
    if (thrust > 50) { thrust = 50; }

    thrusterLeft.origin = leftThruster(entity, game);
    thrusterLeft.qtyMin = thrust;
    thrusterLeft.qtyMax = thrust;
    particles.create(game, thrusterLeft);

    thrusterRight.origin = rightThruster(entity, game);
    thrusterRight.qtyMin = thrust;
    thrusterRight.qtyMax = thrust;
    particles.create(game, thrusterRight);

  }

  if (velocity.y > 0) {
    var retro = Math.floor(velocity.y * 6);
    if (retro > 50) { retro = 50; }

    retroLeft.origin = leftRetro(entity, game);
    retroLeft.qtyMin = retro;
    retroLeft.qtyMax = retro;
    particles.create(game, retroLeft);

    retroRight.origin = rightRetro(entity, game);
    retroRight.qtyMin = retro;
    retroRight.qtyMax = retro;
    particles.create(game, retroRight);

  }

  tailSmoke.origin = {
    "x": get.bottomCenterX(game, entity),
    "y": get.bottomCenterY(game, entity)
  };
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
