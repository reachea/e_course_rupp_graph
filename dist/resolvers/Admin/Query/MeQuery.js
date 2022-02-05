"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeQuery = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var MeQuery = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref, ctx) {
    var knex, admin, me, userRole;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _objectDestructuringEmpty(_ref);

            _context.next = 3;
            return ctx.knex["default"];

          case 3:
            knex = _context.sent;
            _context.next = 6;
            return ctx.admin;

          case 6:
            admin = _context.sent;
            _context.next = 9;
            return knex.table("users").where({
              id: admin.id
            }).first();

          case 9:
            me = _context.sent;
            _context.next = 12;
            return knex.table("users_roles").where({
              user_id: admin.id
            }).innerJoin("roles", "users_roles.roles_id", "roles.id").select('users_roles.id as id', 'users_roles.user_id as user_id', 'roles.name as name');

          case 12:
            userRole = _context.sent;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, me), {}, {
              roles_permission: userRole
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function MeQuery(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.MeQuery = MeQuery;