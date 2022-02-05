import ContextType from "../../../lib/ContextType";

export const CreateRoleMutation = async (_, { input }, ctx: ContextType) => {
  const knex = await ctx.knex.default;

  const createRole = await knex.table("roles").insert({
    name: input.name
  })

  return createRole[0]
}