"use strict";

var _createApolloServer = require("./createApolloServer");

var _dotenv = require("dotenv");

(0, _dotenv.config)();

_createApolloServer.servers.listen(process.env.PORT || 4000).then(function (url) {
  console.log("listening on port: " + url.port + '!');
});