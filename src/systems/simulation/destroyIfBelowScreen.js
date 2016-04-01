"use strict";

function isBelowScreen(canvas, entity, game) {
  var entityPosition = game.entities.get(entity, "position");
  return (entityPosition.y > canvas.height);
}

module.exports = function(ecs, game) {
  ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
    if (isBelowScreen(game.canvas, entity, game)) {
      game.entities.destroy(entity);
    }

  }, "destroyIfBelowScreen");
};
