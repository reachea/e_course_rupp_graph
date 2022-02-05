import { CreateAdminMutation } from "./Admin/Mutation/CreateAdminMutation";
import { SignInMutation } from "./Admin/Mutation/SignInMutation";
import { MeQuery } from "./Admin/Query/MeQuery";
import { UserListQuery } from "./Admin/Query/UserListQuery";
import { CreateRoleMutation } from "./Role/Mutation/CreateRoleMutation";
import { CreateUserRoleMutation } from "./Role/Mutation/CreateUserRoleMutation";
import { RoleListQuery } from "./Role/Query/RoleListQuery";
import { UserRoleQuery } from "./Role/Query/UserRoleQuery";
import { TestQuery } from "./Test/Query/TestQuery";

const AppResolvers = {
  Query: {
    test: TestQuery,
    me: MeQuery,
    userList: UserListQuery,
    roleList: RoleListQuery,
    userRole: UserRoleQuery
  },
  Mutation: {
    createAdmin: CreateAdminMutation,
    signIn: SignInMutation,
    createRole: CreateRoleMutation,
    createUserRole: CreateUserRoleMutation
  }
}

export default AppResolvers;