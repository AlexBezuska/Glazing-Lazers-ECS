"use strict";

var random = require("./random");
/**
* Create bewtween qtyMin and qtyMax prefabs each time function is called.
* origin - point OR entity
*          point behaviour: object ex: {"x": 50, "y": 50} for the starting point of all particles
*          entity behaviour: particles will spawn randomly all over the bounding rectangle created by the entity's position and size.
* prefab - string name of a prefab in prefabs.json
* qtyMin - Minimum number of particles per call
* qtyMax - Maximum number of particles per call
* distance also controlls velocity of particles
* velocityMin - Minimum distance from particle origin to spawn partice
* velocityMax - Maximum distance from particle origin to spawn partice
*/
module.exports = {
  "create": function(config) {
    var particleCount = Math.floor(random.inRange(config.qtyMin, config.qtyMax));
    for (var i = 0; i < particleCount; i++) {
      var particle = config.game.instantiatePrefab(config.prefab);
      // check if origin is an entity
      var origin = config.origin;
      if (typeof config.origin === "number") {
        origin = choosePointInEntity(config.game, origin);
      }
      if (config.sizeMax !== 1) {
        var randomSize = random.inRange(config.sizeMin, config.sizeMax);
        scaleEntityRect(config.game, particle, randomSize);
      }
      centerEntityOnPoint(config.game, particle, origin);

      var velocity = random.inRange(config.velocityMin, config.velocityMax);
      var angle = (i * (config.arcWidth / particleCount)) + config.angle - (config.arcWidth / 2);

      config.game.entities.set(particle, "velocity", pointOnCircle(angle, velocity));

      if (config.lifeSpanFade) {
        config.game.entities.set(particle, "decay-fade", true);
      }
      if (config.accelerationX || config.accelerationY) {
        config.game.entities.set(particle, "acceleration", {
          "x": config.accelerationX,
          "y": config.accelerationY
        });
      }
      config.game.entities.set(particle, "decay",{
        "running": config.decayRunning,
        "time": config.lifeSpanMin,
        "max": config.lifeSpan
      });
    }
  },
  "Config": function(game, origin, prefab, angle, arcWidth, qtyMin, qtyMax, sizeMin, sizeMax, velocityMin, velocityMax, accelerationX, accelerationY, rotationSpeed, rotationDirection, decayRunning, lifeSpanMin, lifeSpan, lifeSpanFade) {
    this.game = game;
    this.origin = origin || { "x": 0, "y": 0 };
    this.prefab = prefab || undefined;
    this.angle = angle || 0;
    this.arcWidth = arcWidth || Math.PI;
    this.qtyMin = qtyMin || 0;
    this.qtyMax = qtyMax || 0;
    this.sizeMin = sizeMin || 1;
    this.sizeMax = sizeMax || 1;
    this.velocityMin = velocityMin || 0;
    this.velocityMax = velocityMax || 0;
    this.accelerationX = accelerationX || 0;
    this.accelerationY = accelerationY || 0;
    this.rotationSpeed = rotationSpeed || 0;
    this.rotationDirection = rotationDirection || 0;
    this.decayRunning = decayRunning || true;
    this.lifeSpanMin = lifeSpanMin || 0;
    this.lifeSpan = lifeSpan || 500;
    this.lifeSpanFade = lifeSpanFade || false;
  }
};


function scaleEntityRect(game, entity, scaleFactor) {
  var size = game.entities.get(entity, "size");
  size.width = size.width * scaleFactor;
  size.height = size.height * scaleFactor;
}


/**
*
*/
function pointOnCircle(angle, radius) {
  return {
    "x": (radius * Math.cos(angle)),
    "y": (radius * Math.sin(angle))
  };
}

/**
* Centers an entity with a position and size on a given point.
* game - required for game.entities.get().
* entity - required id of entity to run function on.
* point - point object ex:{"x": 50, "y": 50} for the starting point of all particles.
*/
function centerEntityOnPoint(game, entity, point) {
  //console.log(point);
  var position = game.entities.get(entity, "position");
  var size = game.entities.get(entity, "size");
  position.x = point.x - (size.width / 2);
  position.y = point.y - (size.height / 2);
}

/**
* Chooses a random point inside the bounding rectangle of an entity with position and size.
* game - required for game.entities.get().
* entity - required id of entity to run function on.
* returns an object ex: {"x": 50, "y": 50}
*/
function choosePointInEntity(game, entity) {
  var position = game.entities.get(entity, "position");
  var size = game.entities.get(entity, "size");
  return {
    "x": random.inRange(position.x, (position.x + size.width)),
    "y": random.inRange(position.y, (position.y + size.height))
  };
}
