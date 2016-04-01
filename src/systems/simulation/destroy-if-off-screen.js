"use strict";

function isOffScreen(canvas, entity, game) {
  var entityPosition = game.entities.get(entity, "position");
  var entitySize = game.entities.get(entity, "size");
  return (entityPosition.x < 0 || entityPosition.y < 0 || (entityPosition.x + entitySize.width) > canvas.width || (entityPosition.y + entitySize.height) > canvas.height);
}

module.exports = function(ecs, game) {
  ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
    if (isOffScreen(game.canvas, entity, game)) {
      game.entities.destroy(entity);
    }

  }, "destroyIfOffScreen");
};
