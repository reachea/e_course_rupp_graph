"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = exports.resolvers = void 0;

var _SchemaLoader = require("./SchemaLoader");

var _AppResolvers = _interopRequireDefault(require("./resolvers/AppResolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var typeDefs = (0, _SchemaLoader.SchemaLoader)();
exports.typeDefs = typeDefs;
var resolvers = [_AppResolvers["default"]];
exports.resolvers = resolvers;