"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.servers = void 0;

var _apolloServer = require("apollo-server");

var _apolloServerCore = require("apollo-server-core");

var _AppSchema = require("./AppSchema");

var _settings = require("./settings");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var servers = new _apolloServer.ApolloServer({
  typeDefs: _AppSchema.typeDefs,
  resolvers: _AppSchema.resolvers,
  context: function () {
    var _context = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var req, context, knex, token, admin;
      return regeneratorRuntime.wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = _ref.req;
              context = _settings.contextType;
              knex = context.knex["default"];
              token = req.query.token;

              if (!token) {
                _context2.next = 8;
                break;
              }

              _context2.next = 7;
              return knex.table("logged_token").where({
                token: token
              }).innerJoin("users", "users.id", "logged_token.user_id").select("users.id", "users.username", "users.email", "users.fullname", "users.gender", "users.phone_number", "users.dob").first();

            case 7:
              admin = _context2.sent;

            case 8:
              return _context2.abrupt("return", {
                knex: {
                  "default": knex
                },
                admin: admin
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));

    function context(_x) {
      return _context.apply(this, arguments);
    }

    return context;
  }(),
  plugins: [_apolloServerCore.ApolloServerPluginLandingPageGraphQLPlayground]
});
exports.servers = servers;