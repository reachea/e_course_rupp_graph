"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAdminMutation = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bcrypt = require('bcrypt');

var CreateAdminMutation = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref, ctx) {
    var input, knex, hash, createAdmin;
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
            return bcrypt.hashSync(input === null || input === void 0 ? void 0 : input.password, 16);

          case 6:
            hash = _context.sent;
            _context.next = 9;
            return knex.table("users").insert({
              username: input === null || input === void 0 ? void 0 : input.username,
              email: input === null || input === void 0 ? void 0 : input.email,
              password: hash,
              fullname: input === null || input === void 0 ? void 0 : input.fullname,
              gender: input === null || input === void 0 ? void 0 : input.gender,
              phone_number: input === null || input === void 0 ? void 0 : input.phone_number,
              dob: input === null || input === void 0 ? void 0 : input.dob
            });

          case 9:
            createAdmin = _context.sent;
            return _context.abrupt("return", createAdmin[0]);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function CreateAdminMutation(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.CreateAdminMutation = CreateAdminMutation;