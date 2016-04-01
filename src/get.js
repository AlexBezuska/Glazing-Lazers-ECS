"use strict";

module.exports = {
  "topLeftX": function(game, entity) {
    var position = game.entities.get(entity, "position");
    return position.x;
  },
  "topLextY": function(game, entity) {
    var position = game.entities.get(entity, "position");
    return position.y;
  },
  "topCenterX": function(game, entity) {
    var position = game.entities.get(entity, "position");
    var size = game.entities.get(entity, "size");
    return position.x + (size.width / 2);
  },
  "topCenterY": function(game, entity) {
    var position = game.entities.get(entity, "position");
    return position.y;
  },
  "topRightX": function(game, entity) {
    var position = game.entities.get(entity, "position");
    var size = game.entities.get(entity, "size");
    return position.x + size.width;
  },
  "topRightY": function(game, entity) {
    var position = game.entities.get(entity, "position");
    return position.y;
  },
  "middleLeftX": function(game, entity) {
    var position = game.entities.get(entity, "position");
    return position.x;
  },
  "middleLeftY": function(game, entity) {
    var position = game.entities.get(entity, "position");
    var size = game.entities.get(entity, "size");
    return position.y + (size.height / 2);
  },
  "middleCenterX": function(game, entity) {
    var position = game.entities.get(entity, "position");
    var size = game.entities.get(entity, "size");
    return position.x + (size.width / 2);
  },
  "middleCenterY": function(game, entity) {
    var position = game.entities.get(entity, "position");
    var size = game.entities.get(entity, "size");
    return position.y + (size.height / 2);
  },
  "middleRightX": function(game, entity) {
    var position = game.entities.get(entity, "position");
    var size = game.entities.get(entity, "size");
    return position.x + size.width;
  },
  "middleRightY": function(game, entity) {
    var position = game.entities.get(entity, "position");
    var size = game.entities.get(entity, "size");
    return position.y + (size.height / 2);
  },
  "bottomLeftX": function(game, entity) {
    var position = game.entities.get(entity, "position");
    return position.x;
  },
  "bottomLeftY": function(game, entity) {
    var position = game.entities.get(entity, "position");
    var size = game.entities.get(entity, "size");
    return position.y + size.height;
  },
  "bottomCenterX": function(game, entity) {
    var position = game.entities.get(entity, "position");
    var size = game.entities.get(entity, "size");
    return position.x + (size.width / 2);
  },
  "bottomCenterY": function(game, entity) {
    var position = game.entities.get(entity, "position");
    var size = game.entities.get(entity, "size");
    return position.y + size.height;
  },
  "bottomRightX": function(game, entity) {
    var position = game.entities.get(entity, "position");
    var size = game.entities.get(entity, "size");
    return position.x + size.width;
  },
  "bottomRightY": function(game, entity) {
    var position = game.entities.get(entity, "position");
    var size = game.entities.get(entity, "size");
    return position.y + size.height;
  }
};
