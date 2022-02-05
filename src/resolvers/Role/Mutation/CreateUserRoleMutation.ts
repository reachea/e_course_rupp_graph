import ContextType from "../../../lib/ContextType"

export const CreateUserRoleMutation = async (_, { input }, ctx: ContextType) => {
  const knex = await ctx.knex.default

  const createUserRole = await knex.table("users_roles").insert({
    user_id: input.user_id,
    roles_id: input.roles_id
  })

  return createUserRole[0]
}