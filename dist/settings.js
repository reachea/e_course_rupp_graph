"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createKnexContext = exports.contextType = void 0;

var _knex = require("knex");

var setting = require('../knexfile');

var createKnexContext = {
  "default": (0, _knex.knex)(setting.development)
};
exports.createKnexContext = createKnexContext;
var contextType = {
  knex: createKnexContext
};
exports.contextType = contextType;