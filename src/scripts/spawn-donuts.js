"use strict";

var random = require("../random");

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
  // var donutSpawnerPosition = game.entities.get(entity, "position");
  // var donutSpawnerSize = game.entities.get(entity, "size");

  // var animation = game.entities.get(donut, "animation");
  // var animations = game.entities.get(donut, "animations");
  // animation.name = random.from(animations);

  var randomPoint = choosePointInEntity(game, entity);
  var donut = game.instantiatePrefab("donut");
  var position = game.entities.get(donut, "position");
  position.x = randomPoint.x;
  position.y = randomPoint.y;

  // game.entities.set(donut, "velocity", {
  //   "x": random.inRange(-0.5, 0.5),
  //   "y": random.inRange(0.5,0.9)
  // });


  var donutSpawnerTimers = game.entities.get(entity, "timers");
  donutSpawnerTimers.donut.running = true;
};


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
