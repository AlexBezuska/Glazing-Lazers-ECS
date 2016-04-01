"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
  game.entities.registerSearch("tracklastPositionSearch", ["position", "velocity", "collisions"]);
  ecs.addEach(function trackLastPosition(entity, elapsed) { // eslint-disable-line no-unused-vars
    var position = game.entities.get(entity, "position");
    game.entities.set(entity, "lastPosition", { x: position.x, y: position.y });
  }, "tracklastPositionSearch");
};
