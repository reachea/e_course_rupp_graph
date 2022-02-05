import ContextType from "../../../lib/ContextType";
const bcrypt = require('bcrypt')

export const CreateAdminMutation = async (_, { input }, ctx: ContextType) => {
  const knex = await ctx.knex.default;

  const hash = await bcrypt.hashSync(input?.password, 16)

  const createAdmin = await knex.table("users").insert({
    username: input?.username,
    email: input?.email,
    password: hash,
    fullname: input?.fullname,
    gender: input?.gender,
    phone_number: input?.phone_number,
    dob: input?.dob
  })

  return createAdmin[0];

  return 1
}