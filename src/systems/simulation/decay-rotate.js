"use strict";

module.exports = function(ecs, game) {
  game.entities.registerSearch("decayRotateSearch", ["decay-rotate", "decay", "rotation"]);
  ecs.addEach(function decayRotate(entity) {
    var decay = game.entities.get(entity, "decay");
    var rotation = game.entities.get(entity, "rotation");

    var current = invertFloat(decay.time / decay.max);
    var total = (Math.PI * 2) * 100;

    //console.log(current + " * " + total);
    rotation.angle =  (total * current) / 100;
    //console.log(rotation.angle);
  }, "decayRotateSearch");
};


function invertFloat(float) {
  return (100 - (float * 100)) / 100;
}
