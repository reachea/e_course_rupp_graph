"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCourseMutation = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CreateCourseMutation = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref, ctx) {
    var input, knex, createCourse;
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
            return knex.table("courses").insert({
              author: input.author,
              name: input.name,
              price: input.price,
              discount: input.discount,
              thumbnail: input.thumbnail
            });

          case 6:
            createCourse = _context.sent;
            return _context.abrupt("return", createCourse[0]);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function CreateCourseMutation(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.CreateCourseMutation = CreateCourseMutation;