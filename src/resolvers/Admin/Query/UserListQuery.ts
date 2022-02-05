import ContextType from "../../../lib/ContextType";

export const UserListQuery = async (_, {}, ctx: ContextType) => {
  const knex = await ctx.knex.default;

  const query = await knex.table("users")

  return {
    data: query
  }
}