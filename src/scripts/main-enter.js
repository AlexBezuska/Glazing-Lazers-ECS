"use strict";

module.exports = function(game) { // eslint-disable-line no-unused-vars
  game.scaleCanvasToFitRectangle(1080,1920);

  var player = 1;
  var position = game.entities.get(player, "position");
  var size = game.entities.get(player, "size");
  position.x = (game.canvas.width / 2) - (size.width / 2);
  position.y = (game.canvas.height / 2) + (size.height / 2);
};
