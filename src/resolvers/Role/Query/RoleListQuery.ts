import ContextType from "../../../lib/ContextType";

export const RoleListQuery = async (_, {}, ctx: ContextType) => {
  const knex = await ctx.knex.default;

  const roles = await knex.table("roles")

  return roles
}