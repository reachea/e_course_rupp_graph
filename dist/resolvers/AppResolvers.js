"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CreateAdminMutation = require("./Admin/Mutation/CreateAdminMutation");

var _SignInMutation = require("./Admin/Mutation/SignInMutation");

var _MeQuery = require("./Admin/Query/MeQuery");

var _UserListQuery = require("./Admin/Query/UserListQuery");

var _CreateRoleMutation = require("./Role/Mutation/CreateRoleMutation");

var _CreateUserRoleMutation = require("./Role/Mutation/CreateUserRoleMutation");

var _RoleListQuery = require("./Role/Query/RoleListQuery");

var _UserRoleQuery = require("./Role/Query/UserRoleQuery");

var _TestQuery = require("./Test/Query/TestQuery");

var AppResolvers = {
  Query: {
    test: _TestQuery.TestQuery,
    me: _MeQuery.MeQuery,
    userList: _UserListQuery.UserListQuery,
    roleList: _RoleListQuery.RoleListQuery,
    userRole: _UserRoleQuery.UserRoleQuery
  },
  Mutation: {
    createAdmin: _CreateAdminMutation.CreateAdminMutation,
    signIn: _SignInMutation.SignInMutation,
    createRole: _CreateRoleMutation.CreateRoleMutation,
    createUserRole: _CreateUserRoleMutation.CreateUserRoleMutation
  }
};
var _default = AppResolvers;
exports["default"] = _default;