"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignInMutation = void 0;

var _apolloServerExpress = require("apollo-server-express");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bcrypt = require('bcrypt');

var crypto = require('crypto');

var SignInMutation = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref, ctx) {
    var input, knex, user, randomToken;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input;
            _context.next = 3;
            return ctx.knex["default"];

          case 3:
            knex = _context.sent;
            _context.next = 6;
            return knex.table("users").where({
              username: input.username
            }).first();

          case 6:
            user = _context.sent;
            _context.next = 9;
            return bcrypt.compareSync(input.password, user.password);

          case 9:
            if (!_context.sent) {
              _context.next = 14;
              break;
            }

            randomToken = crypto.randomBytes(64).toString("hex");
            _context.next = 13;
            return knex.table("logged_token").insert({
              user_id: user.id,
              token: randomToken
            });

          case 13:
            return _context.abrupt("return", randomToken);

          case 14:
            return _context.abrupt("return", new _apolloServerExpress.AuthenticationError("Password or Username not found!"));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function SignInMutation(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.SignInMutation = SignInMutation;