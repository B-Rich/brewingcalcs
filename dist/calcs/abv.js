"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = abv;
function abv(originalGravity, finalGravity) {
  return (originalGravity - finalGravity) * 131;
}