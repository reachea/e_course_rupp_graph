import ContextType from "../../../lib/ContextType"

export const MeQuery = async (_, {}, ctx: ContextType) => {
  const knex = await ctx.knex.default;

  const admin = await ctx.admin;

  const me = await knex.table("users").where({
    id: admin.id
  }).first();

  const userRole = await knex.table("users_roles").where({
    user_id: admin.id
  }).innerJoin("roles", "users_roles.roles_id", "roles.id").select(
    'users_roles.id as id',
    'users_roles.user_id as user_id',
    'roles.name as name'
  )

  return {
    ...me,
    roles_permission: userRole
  }
}