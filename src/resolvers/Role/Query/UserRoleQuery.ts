import ContextType from "../../../lib/ContextType";

export const UserRoleQuery = async (_, { user_id }, ctx: ContextType) => {
  const knex = await ctx.knex.default

  const userRole = await knex.table("users_roles").where({
    user_id: user_id
  }).innerJoin("roles", "users_roles.roles_id", "roles.id")

  return userRole
}